import React from "react";

const AboutHM = () => {
  return (
    <div className="container mx-auto px-4 lg:px-32 py-12 font-montserrat">
      {/* الجزء الخاص بالغلاف */}
      <div className="text-center mb-16"> {/* تقليل المسافة إلى 4 سطور */}
        <h1 className="text-5xl font-bold mb-8">مجموعة اتش آند ام</h1> {/* تقليل المسافة أسفل العنوان */}
        <p className="text-2xl text-gray-700 leading-loose mb-4">  {/* تقليل المسافة إلى سطرين */}
          تعد مجموعة اتش آند ام واحدة من شركات الأزياء الرائدة في العالم.
          وبالإضافة إلى اتش آند ام، تضم المجموعة علامات آذر ستوريتز، وكوس، Monki،
          Weekday، واتش آند ام هوم، وتتميز جميع منتجات اتش آند ام بكونها منفردة
          بجودتها ومتعددة بشغفها لعالم الأزياء والموضة، وهدفنا دائمًا هو تقديم
          منتجات مستدامة لزائرينا.
        </p>

        {/* نص خط خفيف تحت "مجموعة اتش اند ام" مباشرة */}
        <div className="w-1/2 mx-auto border-t border-gray-400 mb-16"></div> {/* تقليل المسافة بين الخط والنص */}
      </div>

      {/* المحتوى الأساسي */}
      <div className="flex flex-col gap-12 mb-12">
        <div className="w-full text-right mb-16"> {/* محاذاة النص لليمين */}
          <h2 className="text-4xl font-bold mb-6">الأزياء التي يحبها الجميع</h2>
          <p className="text-2xl text-gray-700 leading-tight mb-10">
            بدأ كل شيء مع متجر واحد لبيع الملابس النسائية في مدينة فيستيروس، السويد،
            في عام 1947. واليوم، فإن مجموعة اتش آند ام تضم العديد من العلامات التجارية
            المختلفة حول العالم، وتميزنا يكمن في توسعنا المستمر، ووجودنا في كل الأسواق
            القوية.
          </p>
          {/* خط عادي طويل بعد الفقرة اليمنى */}
          <div className="flex justify-center items-center mb-10">
            <div className="w-full border-t border-gray-400"></div> {/* خط طويل */}
          </div>
        </div>

        <div className="w-full text-left mb-16"> {/* محاذاة النص لليسار */}
          <h2 className="text-4xl font-bold mb-6">كيف نقوم بمهمتنا</h2>
          <p className="text-2xl text-gray-700 leading-tight mb-10">
            نسعى دائمًا لتقديم أفضل الأزياء المستدامة لزائرينا. التزامنا بخلق مستقبل
            أفضل لأجيال المستقبل يقودنا إلى صنع منتجات عالية الجودة تناسب جميع الأذواق.
          </p>
          {/* خط عادي طويل بعد الفقرة اليسرى */}
          <div className="flex justify-center items-center mb-10">
            <div className="w-full border-t border-gray-400"></div> {/* خط طويل */}
          </div>
        </div>
      </div>

      {/* محتوى من نحن وإحصائيات مهمة */}
      <div className="flex flex-col gap-12 mb-12">
        <div className="w-full text-right mb-16"> {/* محاذاة النص لليمين */}
          <h2 className="text-4xl font-bold mb-6">من نحن</h2>
          <p className="text-2xl text-gray-700 leading-tight mb-10">
            تضم مجموعة اتش آند ام أكثر من 161,000 موظف من جنسيات متنوعة، جميعهم يسعون
            لضمان تجربة تسوق متميزة وفريدة لعملائنا. نحرص في اتش آند ام على احترام
            عملائنا، وتقديم منتجات تستند إلى قيم أساسية قوية.
          </p>
          {/* خط عادي طويل بعد الفقرة اليمنى */}
          <div className="flex justify-center items-center mb-10">
            <div className="w-full border-t border-gray-400"></div> {/* خط طويل */}
          </div>
        </div>

        <div className="w-full text-left mb-16"> {/* محاذاة النص لليسار */}
          <h2 className="text-4xl font-bold mb-6">إحصائيات مهمة</h2>
          <ul className="list-disc list-inside text-2xl text-gray-700 leading-tight space-y-1 mb-10">
            <li>قامت مجموعة اتش آند ام بتوظيف 13,000 موظف جديد في عام 2016.</li>
            <li>نحن متواجدون في 69 سوق ولدينا 4500 متجر.</li>
            <li>بلغت مبيعات مجموعة اتش آند ام في 2016 حوالي 223 مليار كرونة سويدية.</li>
          </ul>
          {/* خط عادي طويل بعد الفقرة اليسرى */}
          <div className="flex justify-center items-center mb-10">
            <div className="w-full border-t border-gray-400"></div> {/* خط طويل */}
          </div>
        </div>
      </div>

      {/* جزء هل تعلم */}
      <div className="flex flex-col gap-12 mb-12">
        <div className="w-full text-right mb-16"> {/* محاذاة النص لليمين */}
          <h2 className="text-4xl font-bold mb-6">هل تعلم</h2>
          <ul className="list-disc list-inside text-2xl text-gray-700 leading-tight space-y-1 mb-10">
            <li>أن 96% من الكهرباء المستخدمة في إنتاجنا في 2016 كانت من مصادر متجددة.</li>
            <li>نحن ملتزمون بتقليل الانبعاثات الملوثة بنسبة 47% بحلول عام 2030.</li>
            <li>نساعد في توفير 1.6 مليون وظيفة للعاملين في قطاع النسيج.</li>
          </ul>
          {/* خط عادي طويل بعد الفقرة اليمنى */}
          <div className="flex justify-center items-center mb-10">
            <div className="w-full border-t border-gray-400"></div> {/* خط طويل */}
          </div>
        </div>

        <div className="w-full text-left mb-16"> {/* محاذاة النص لليسار */}
          {/* يمكن إضافة جزء إضافي هنا أو إبقاءه فارغًا */}
        </div>
      </div>
    </div>
  );
};

export default AboutHM;
