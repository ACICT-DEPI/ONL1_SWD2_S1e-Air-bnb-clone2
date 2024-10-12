// SideListsComponent.jsx
import React from "react";
import { Link } from "react-router-dom";

const LinkLi = ({ href, text }) => {
  return (
    <Link
      to={href}
      className="text-sm border-b-2 border-transparent hover:border-red-600 hover:text-red-600 w-fit duration-75"
    >
      {text}
    </Link>
  );
};

// Updated sideLists based on both images
const sideLists = [
  {
    name: "تشكيلات جديدة",
    links: [
      { name: "اظهار الكل", link: "./collections/view-all" },
      { name: "الملابس", link: "./collections/clothing" },
      { name: "الأحذية والإكسسوارات", link: "./collections/accessories" },
      { name: "ملابس السياحة", link: "./collections/tourism-clothes" },
      { name: "الملابس الرياضية", link: "./collections/sportswear" },
    ],
  },
  {
    name: "أهم العروض",
    links: [
      { name: "الأكثر مبيعاً", link: "./offers/best-sellers" },
    ],
  },
  {
    name: "الرائج الآن",
    links: [
      { name: "راحة فاخرة", link: "./trending/luxury-comfort" },
      { name: "رايان واتش آند إم", link: "./trending/ryan-watch-hm" },
      { name: "تصاميم عصرية", link: "./trending/modern-designs" },
      { name: "قسم تصاميم العطلات", link: "./trending/holiday-designs" },
      { name: "Style inspiration", link: "./trending/style-inspiration" },
    ],
  },
  {
    name: "تسوق حسب المنتج",
    links: [
      { name: "اظهار الكل", link: "./shop-by-product/view-all" },
      { name: "الفساتين", link: "./shop-by-product/dresses" },
      { name: "البلايز", link: "./shop-by-product/blouses" },
      { name: "البنطلونات", link: "./shop-by-product/pants" },
      { name: "القمصان والبلايز", link: "./shop-by-product/shirts-blouses" },
      { name: "الأحذية", link: "./shop-by-product/shoes" },
      { name: "ملابس السياحة", link: "./shop-by-product/tourism-clothes" },
      { name: "التنانير", link: "./shop-by-product/skirts" },
      { name: "الشورتات", link: "./shop-by-product/shorts" },
    ],
  },
  {
    name: "مجموعة إضافية",
    links: [
      { name: "الأحذية", link: "./shop-by-product/shoes" },
      { name: "ملابس السياحة", link: "./shop-by-product/tourism-clothes" },
      { name: "التنانير", link: "./shop-by-product/skirts" },
      { name: "الشورتات", link: "./shop-by-product/shorts" },
      { name: "الجيزات", link: "./shop-by-product/jeans" },
      { name: "الإكسسوارات", link: "./shop-by-product/accessories" },
      { name: "هوديز والكنزات الثقيلة", link: "./shop-by-product/hoodies" },
      { name: "الكارديجان والكنزات", link: "./shop-by-product/cardigans" },
      { name: "السترات والمعاطف", link: "./shop-by-product/coats" },
      { name: "أوفروﻻت", link: "./shop-by-product/overalls" },
      { name: "البليرزات", link: "./shop-by-product/blazers" },
      { name: "اللانجري", link: "./shop-by-product/lingerie" },
      { name: "ملابس النوم", link: "./shop-by-product/sleepwear" },
      { name: "الجوارب والكولونات", link: "./shop-by-product/socks" },
      { name: "الملابس الرياضية", link: "./shop-by-product/sportswear" },
      { name: "منتجات التجميل", link: "./shop-by-product/beauty-products" },
      { name: "تشكيلة فاخرة", link: "./shop-by-product/luxury" },
      { name: "أزياء الحوامل", link: "./shop-by-product/maternity" },
      { name: "المقاسات الكبيرة", link: "./shop-by-product/plus-size" },
      { name: "العناية من اتش آند إم", link: "./shop-by-product/hm-care" },
      { name: "الملابس الصوفية", link: "./shop-by-product/woolen-clothes" },
    ],
  },
  {
    name: "المجلة",
    links: [
      { name: "المجلة", link: "./magazine" },
    ],
  },
];

const SideLists = () => {
  return (
    <aside className="w-[235px] hidden xl:flex flex-col gap-4">
      {sideLists.map((list, index) => (
        <div className="flex flex-col gap-4 " key={index}>
          <h3 className="font-bold">{list.name}</h3>
          <ul className="flex flex-col gap-2">
            {list.links.map((link, index) => (
              <LinkLi href={link.link} text={link.name} key={index} />
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default SideLists;
