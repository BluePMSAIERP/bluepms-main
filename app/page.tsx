import { headers } from "next/headers";

import HomeClient from "./HomeClient";

type PageSearchParams = Record<string, string | string[] | undefined>;

const UAE_IDENTIFIERS = new Set(["AE", "ARE", "UAE", "UNITED ARAB EMIRATES"]);
const GEO_HEADER_KEYS = [
  "x-vercel-ip-country",
  "cf-ipcountry",
  "x-country-code",
  "x-geo-country",
  "geoip-country-code",
];

const normalize = (value: string | null | undefined) => value?.trim().toUpperCase() ?? "";

const resolveParam = (value: string | string[] | undefined) =>
  Array.isArray(value) ? value[0] : value;

const isUae = (value: string | null | undefined) =>
  UAE_IDENTIFIERS.has(normalize(value));

type HomeProps = {
  searchParams?: Promise<PageSearchParams>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams: PageSearchParams = (await searchParams) ?? {};
  const headerList = headers();
  const headerCountry = GEO_HEADER_KEYS.map((key) => headerList.get(key)).find(Boolean);
  const showFromHeader = isUae(headerCountry);

  const resolvedRegion = resolveParam(resolvedSearchParams.region);
  const resolvedCountry = resolveParam(resolvedSearchParams.country);
  const showFromParams = isUae(resolvedRegion) || isUae(resolvedCountry);

  return <HomeClient showUaeOffer={showFromHeader || showFromParams} />;
}
