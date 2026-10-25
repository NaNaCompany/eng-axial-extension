export const tool = {
  "id": "E034",
  "title": "축하중 봉재 늘어남 계산기",
  "inputs_text": "축하중 F [N], 길이 L [m], 단면적 A [m²], 영률 E [Pa]",
  "formula": "δ = F L / (A E)",
  "output_text": "축방향 길이 변화 δ [m]",
  "assumptions": "L,A,E>0. 등단면·등재질·균일 축력·선형 탄성·작은 변형에 한정한다. 압축이면 음수이며 좌굴과 소성변형은 제외한다.",
  "purpose": "인장봉 늘어남 계산 / 하중-변위 검산",
  "sources": [
    {
      "label": "OpenStax · Stress, Strain, and Elastic Modulus",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/12-3-stress-strain-and-elastic-modulus"
    }
  ],
  "slug": "eng-axial-extension",
  "category": "재료",
  "result_label": "축방향 길이 변화 δ",
  "result_dimension": "length",
  "fields": [
    {
      "key": "f",
      "label": "축하중 F",
      "dimension": "force",
      "example": 10000,
      "constraint": "signed",
      "display_unit": "N",
      "display_value": "10000"
    },
    {
      "key": "l",
      "label": "봉재 길이 L",
      "dimension": "length",
      "example": 2,
      "constraint": "positive",
      "display_unit": "m",
      "display_value": "2"
    },
    {
      "key": "a",
      "label": "단면적 A",
      "dimension": "area",
      "example": 0.0001,
      "constraint": "positive",
      "display_unit": "mm2",
      "display_value": "100"
    },
    {
      "key": "e",
      "label": "영률 E",
      "dimension": "pressure",
      "example": 200000000000.0,
      "constraint": "positive",
      "display_unit": "GPa",
      "display_value": "200"
    }
  ],
  "site": "https://nanalab.kr/eng-axial-extension/",
  "repository": "https://github.com/NaNaCompany/eng-axial-extension",
  "condition": "",
  "output_unit": "mm"
};
