import React from 'react';
import Discount from '../components/homePage/Discount'; // استيراد مكون الخصومات
import RecommendationList from '../components/homePage/RecommendationList'; // استيراد قائمة التوصيات
import Cover from '../components/homePage/Cover'; // استيراد مكون الغلاف (Cover)
import { Link } from 'react-router-dom';
import SideLists from "./SideListsComponent"; // استيراد قائمة الجوانب

const WomenShop = () => {
  // تعريف المتغيرات التي تحتاج استخدامها
  const header = "تشكيلة تتميز بدرجات اللون الوردي";
  const text = "مع كشكة ناعمة وطبعات زهور مميزة";
  const link = "#";
  const linkText = "تسوقي هنا";

  return (
    <div className="container overflow-hidden xl:max-w-6xl mx-auto flex flex-col xl:flex-row gap-4 px-5 xl:px-0">
  {/* تحريك القائمة الجانبية إلى اليمين */}
  <aside className="hidden xl:block w-1/4 mr-4">
    <SideLists />
  </aside>

      <main className="xl:w-3/4 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center my-4">النساء</h1>

        {/* قسم الخصومات يظهر أولاً */}
        <Discount />

        {/* الغلاف مع النص والزر بعد الخصومات */}
        <Cover
          header="خياطة عصرية"
          img="https://cdn-eu.dynamicyield.com/api/9876644/images/4ffaed093fe0__fnp-ws50e-ns-3x2-1.webp"
          smallImg="https://cdn-eu.dynamicyield.com/api/9876644/images/47e437275515__fnp-ws50e-ns-1x1-1.webp"
          text="تصاميم انيقة باللون الرمادي والازرق والبني"
          link="/products"
          linkText="تسوقي هنا"
        />

        {/* الصورة من Cloudinary بعد الصورة الأولى */}
        <div className="relative w-full h-[70vh] flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/deq4efv7r/image/upload/v1728481675/h-mwomen_gjhdfm.webp"
            alt="New Cloudinary Image"
            className="w-full h-full object-cover"
          />
          <div className="flex w-full flex-col items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-b from-black/0 to-black/60 to-90% ">
            <p className="text-3xl lg:text-5xl text-white">{header}</p>
            <p className="text-lg lg:text-xl text-center text-white">{text}</p>
            <a href={link} className="bg-white text-black px-3 py-1 my-5">
              {linkText}
            </a>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold">تسوقي الملابس النسائية من اتش آند ام</h2>
          <p>
            تقدم لكِ اتش آند ام كل أساسيات الموضة كإحدى وجهات التسوق الرائدة على مستوى العالم. ولدى اتش آند ام ، يمكنك أن تتسوقي أحدث صيحات الموضة لملابس النساء ومنتجات الموضة، من أحذية وإكسسوارات، وملابس الرياضة، ومنتجات التجميل وغيرها. جددي محتوى خزانتك بقطع حصرية من تشكيلة الملابس المتوفرة لدينا، وتسوقي ملابس كاجوال للنساء لتتألقي بأحدث صيحات الموضة في تي-شيرتات أساسية، وبنطلونات جينز، بالإضافة إلى منتجات تجميل وعناية بالبشرة.
          </p>
          <p>
            بالتأكيد سوف تستمتعين بتجربة تسوق سهلة في اتش آند ام، حيث تجدين الكثير من التصاميم لتختاري منها ما يناسب ذوقك، سواء كنتِ تبحثين عن إطلالة عصرية تخطف الأنظار، أو تبحثين عن ملابس المنزل التي تمنحك راحة الارتداء، أو حتى الملابس الرياضية المثالية للتمرينات. وتضم تشكيلة اتش آند ام جميع الملابس الأساسية التي لا غنى عنها. كما نقدم لك تشكيلة متنوعة من التصاميم البسيطة، والتشكيلات الحصرية التي تشمل ملابس الربيع الأساسية المريحة، وأطقم أنيقة منسقة بعناية. طالعي أيضاً تشكيلةConscious  التي تقدم لكِ ملابس فاخرة وعملية. تقدم اتش آند ام مصر ملابس نسائية أنيقة بطريقة أكثر استدامة.
          </p>
          <p>
            تجربة تسوق تلبي احتياجاتك
          </p>
          <p>
            لنضمن لكِ تجربة تسوق في غاية السهولة، رتبنا الأصناف المتنوعة بطريقة تمكنك من التسوق بحسب العروض، المنتجات، التصنيفات والفئات، بما يلائم المناسبة أو الإطلالة التي تبحثين عنها. كما يمكنك تصفح فئة خط الموضة Modern Classic  و Trend لملابس كلاسيكية أما إذا كنتِ تبحثين عن إطلالة شبابية تضج بالألوان.
          </p>
          <p>
            كما نقدم في اتش آند ام مجموعة H&M+ لملابس نسائية بمقاسات كبيرة، تضم كل ما تحتاجه خزانة ملابسك من الملابس الأساسية والبنطلونات والفساتين والملابس الرياضية بأحجام كبيرة. اطلعي على أحدث ما نقدمه من الفساتين كبيرة الحجم التي تتنوع تصاميمها من قصة القميص، إلى التصميم الملفوف وفساتين المساء السوداء، لتختاري منها إطلالتك التالية.
          </p>
          <p>
            هل تحبين العروض الرائعة؟ لم لا تتصفحين قسم العروض لتستكشفي مئات المنتجات مشمولة بالتنزيلات بأسعار مناسبة. فإذا كنتِ تبحثين عن ملابس جديدة، أو ترغبين في إعادة تجديد خزانة ملابسك، سوف تشعرين بالسعادة بنهاية تسوقك. وإلى جانب عروض الملابس التي نقدمها لكِ، تألقي بإطلالة غير رسمية لأوقات ما بعد انتهاء العمل، تجدينها ضمن تشكيلة الأحذية والإكسسوارات، بالإضافة إلى إكسسوارات الشعر والحقائب، بالتأكيد سوف تجدين ما تبحثين عنه. تفقدي عروضنا على أساسيات خزانة ملابسك من الدنيم، وأضفي لمسة من الأناقة الدائمة على إطلالتك بالبنطلونات بخصر عالي، وبنطلونات فترة الحمل، والبنطلونات بقصة Boyfriend، وجاكيتات الدنيم.
          </p>
        </div>
      </main>
    </div>
  );
};

export default WomenShop;
