import wilayas from "./data/wilayas.js";
import communes from "./data/communes.js";

// Create Maps for faster lookups
const wilayaMap = new Map(wilayas.map((wilaya) => [wilaya.id, wilaya]));
const communeMap = new Map(communes.map((commune) => [commune.id, commune]));

// Get Wilaya by ID
export const getWilayaById = (wilayaId) =>
  wilayaMap.get(String(wilayaId)) || null;

// Get Commune by ID
export const getCommuneById = (communeId) =>
  communeMap.get(String(communeId)) || null;

// Get Communes by Wilaya ID
export const getCommunesByWilaya = (wilayaId) =>
  communes.filter((commune) => commune.wilaya_id === String(wilayaId));

// Get Wilaya Name by ID
export const getWilayaNameById = (wilayaId) =>
  wilayaMap.get(String(wilayaId))?.name || null;

// Get Commune Name by ID
export const getCommuneNameById = (communeId) =>
  communeMap.get(String(communeId))?.name || null;

// Get Wilaya by Code
export const getWilayaByCode = (code) =>
  wilayas.find((wilaya) => wilaya.code === String(code)) || null;

// Get Communes by Wilaya Code
export const getCommunesByWilayaCode = (code) => {
  const wilaya = getWilayaByCode(code);
  return wilaya ? getCommunesByWilaya(wilaya.id) : [];
};

// Get All Wilayas
export const getAllWilayas = () => wilayas;

// Get All Communes
export const getAllCommunes = () => communes;

// Get Communes by Name
export const getCommunesByName = (name) =>
  communes.filter((commune) =>
    commune.name.toLowerCase().includes(name.toLowerCase())
  );

// Get Wilayas by Name
export const getWilayasByName = (name) =>
  wilayas.filter((wilaya) =>
    wilaya.name.toLowerCase().includes(name.toLowerCase())
  );

// Get Commune by Postal Code
export const getCommuneByPostCode = (postCode) =>
  communes.find((commune) => commune.post_code === String(postCode)) || null;

// Get Wilaya by Postal Code
export const getWilayaByPostCode = (postCode) => {
  const commune = getCommuneByPostCode(postCode);
  return commune ? getWilayaById(commune.wilaya_id) : null;
};

// Get Communes by Postal Code Range
export const getCommunesByPostCodeRange = (postCodePrefix) =>
  communes.filter((commune) => commune.post_code.startsWith(postCodePrefix));

// Get Wilaya Name by Postal Code
export const getWilayaNameByPostCode = (postCode) => {
  const wilaya = getWilayaByPostCode(postCode);
  return wilaya ? wilaya.name : null;
};
