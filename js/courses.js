// ** CS College ** \\
var csCourses = [
    {
        creditHours: 3,
        number: 104,
        name: "تراكيب محددة"
    },
    {
        creditHours: 3,
        number: 114,
        name: "تراكيب محددة ١"
    },
    {
        creditHours: 3,
        number: 106,
        name: "المنطق الرقمي"
    },
    {
        creditHours: 4,
        number: 125,
        name: "تصميم المنطق الرقمي"
    },
    {
        creditHours: 4,
        number: 140,
        name: "برمجة الحاسبات ١"
    },
    {
        creditHours: 4,
        number: 141,
        name: "برمجة الحاسبات ٢"
    },
    {
        creditHours: 4,
        number: 150,
        name: "مقدمة في برمجة الحاسبات"
    },
    {
        creditHours: 4,
        number: 151,
        name: "البرمجة الشيئية"
    },
    {
        creditHours: 2,
        number: 180,
        name: "الأمن السيبراني والأخلاقيات"
    },
    {
        creditHours: 3,
        number: 215,
        name: "تصميم وتحليل الخوارزميات"
    },
    {
        creditHours: 4,
        number: 220,
        name: "تنظيم حاسبات وبرمجة التجميع"
    },
    {
        creditHours: 4,
        number: 221,
        name: "عمارة الحاسبات"
    },
    {
        creditHours: 4,
        number: 224,
        name: "تنظيم الحاسبات"
    },
    {
        creditHours: 4,
        number: 225,
        name: "أساسيات أنظمة الحاسبات"
    },
    {
        creditHours: 4,
        number: 242,
        name: "تراكيب البيانات"
    },
    {
        creditHours: 3,
        number: 310,
        name: "هندسة البرمجيات"
    },
    {
        creditHours: 4,
        number: 322,
        name: "نظم التشغيل"
    },
    {
        creditHours: 4,
        number: 330,
        name: "شبكات الحاسب"
    },
    {
        creditHours: 3,
        number: 340,
        name: "ذكاء اصطناعي"
    },
    {
        creditHours: 3,
        number: 344,
        name: "مبادئ لغات البرمجة"
    },
    {
        creditHours: 3,
        number: 370,
        name: "مبادئ قواعد البيانات"
    },
    {
        creditHours: 1,
        number: 391,
        name: "ندوة"
    },
    {
        creditHours: 3,
        number: 401,
        name: "التحليل العددي للحوسبة"
    },
    {
        creditHours: 3,
        number: 403,
        name: "نظرية الرسومات"
    },
    {
        creditHours: 3,
        number: 432,
        name: "أمن الشبكات"
    },
    {
        creditHours: 3,
        number: 438,
        name: "تقنيات الانترنت"
    },
    {
        creditHours: 3,
        number: 439,
        name: "حوسبة السحاب"
    },
    {
        creditHours: 4,
        number: 445,
        name: "المترجمات"
    },
    {
        creditHours: 3,
        number: 452,
        name: "التفاعل بين الإنسان والحاسب"
    },
    {
        creditHours: 3,
        number: 471,
        name: "نظم إدراة قواعد البيانات"
    },
    {
        creditHours: 1,
        number: 480,
        name: "التدريب العملي"
    },
    {
        creditHours: 2,
        number: 492,
        name: "مشروع تخرج ١"
    },
    {
        creditHours: 4,
        number: 493,
        name: "مشروع تخرج ٢"
    },
];

var isCourses = [
    {
        creditHours: 3,
        number: 200,
        name: "مدخل إلى نظم المعلومات"
    },
    {
        creditHours: 3,
        number: 201,
        name: "أسس نظم المعلومات"
    },
    {
        creditHours: 3,
        number: 203,
        name: "برمجة الويب"
    },
    {
        creditHours: 3,
        number: 229,
        name: "مقدمة في قواعد البيانات"
    },
    {
        creditHours: 3,
        number: 320,
        name: "مقدمة في قواعد البيانات"
    },
    {
        creditHours: 3,
        number: 230,
        name: "تحليل متطلبات الأعمال"
    },
    {
        creditHours: 4,
        number: 309,
        name: "تحليل وتصميم النظم"
    },
    {
        creditHours: 3,
        number: 320,
        name: "مقدمة في قواعد البيانات"
    },
    {
        creditHours: 3,
        number: 332,
        name: "نظم دعم اتخاذ القرار"
    },
    {
        creditHours: 3,
        number: 339,
        name: "تحليل وتصميم النظم"
    },
    {
        creditHours: 3,
        number: 332,
        name: "نظم دعم إتخاذ القرار"
    },
    {
        creditHours: 4,
        number: 371,
        name: "إدارة قواعد البيانات التطبيقية"
    },
    {
        creditHours: 1,
        number: 391,
        name: "ندوة"
    },
    {
        creditHours: 3,
        number: 394,
        name: "هندسة المتطلبات"
    },
    {
        creditHours: 3,
        number: 395,
        name: "موضوعات مختارة في نظم المعلومات ١"
    },
    {
        creditHours: 3,
        number: 396,
        name: "موضوعات مختارة في نظم المعلومات ٢"
    },
    {
        creditHours: 3,
        number: 397,
        name: "موضوعات مختارة في نظم المعلومات ٣"
    },
    {
        creditHours: 4,
        number: 414,
        name: "تصميم وبناء الأعمال الالكترونية"
    },
    {
        creditHours: 3,
        number: 433,
        name: "أمن المعلومات"
    },
    {
        creditHours: 3,
        number: 441,
        name: "إدارة المشاريع"
    },
    {
        creditHours: 3,
        number: 459,
        name: "نظم معلومات المؤسسات"
    },
    {
        creditHours: 3,
        number: 489,
        name: "أمن المعلومات"
    },
    {
        creditHours: 2,
        number: 497,
        name: "مشروع التخرج ١"
    },
    {
        creditHours: 4,
        number: 498,
        name: "مشروع التخرج ٢"
    }
];

var itCourses = [
    {
        creditHours: 3,
        number: 280,
        name: "أساسيات تقنية المعلومات"
    },
    {
        creditHours: 4,
        number: 281,
        name: "أنظمة تقنية المعلومات"
    },
    {
        creditHours: 3,
        number: 300,
        name: "التفاعل بين الإنسان والحاسب"
    },
    {
        creditHours: 4,
        number: 301,
        name: "إدارة المشاريع"
    },
    {
        creditHours: 3,
        number: 310,
        name: "أمن المعلومات"
    },
    {
        creditHours: 3,
        number: 320,
        name: "مبادئ قواعد البيانات"
    },
    {
        creditHours: 3,
        number: 321,
        name: "قواعد البيانات المتقدمة"
    },
    {
        creditHours: 3,
        number: 322,
        name: "تخزين البيانات"
    },
    {
        creditHours: 3,
        number: 331,
        name: "أساسيات العمارة ذات الطبقات المتعددة"
    },
    {
        creditHours: 4,
        number: 340,
        name: "شبكات الحاسب"
    },
    {
        creditHours: 3,
        number: 341,
        name: "أمن الشبكات"
    },
    {
        creditHours: 3,
        number: 342,
        name: "الحوسبة المتنقلة واللاسلكية"
    },
    {
        creditHours: 4,
        number: 360,
        name: "نظم التشغيل"
    },
    {
        creditHours: 3,
        number: 372,
        name: "إدارة قواعد البيانات"
    },
    {
        creditHours: 3,
        number: 390,
        name: "أنظمة الويب"
    },
    {
        creditHours: 3,
        number: 412,
        name: "حوكمة تقنية المعلومات"
    },
    {
        creditHours: 3,
        number: 413,
        name: "نظم المشاريع"
    },
    {
        creditHours: 3,
        number: 420,
        name: "أخلاقيات الحاسب"
    },
    {
        creditHours: 1,
        number: 490,
        name: "ندوة"
    },
    {
        creditHours: 2,
        number: 492,
        name: "مشروع تخرج ١"
    },
    {
        creditHours: 4,
        number: 493,
        name: "مشروع تخرج ٢"
    }
];

var infoStudiesCourses = [
    {
        creditHours: 3,
        number: 101,
        name: "مقدمة في دراسات المعلومات"
    },
    {
        creditHours: 3,
        number: 111,
        name: "مصادر المعلومات"
    },
    {
        creditHours: 3,
        number: 151,
        name: "مقدمة في تنظيم المعلومات"
    },
    {
        creditHours: 3,
        number: 201,
        name: "توصيف البيانات"
    },
    {
        creditHours: 3,
        number: 211,
        name: "علم المعلومات"
    },
    {
        creditHours: 3,
        number: 261,
        name: "تحليل المحتوى"
    },
    {
        creditHours: 3,
        number: 271,
        name: "تصميم مواقع الانترنت"
    },
    {
        creditHours: 3,
        number: 301,
        name: "خدمات المعلومات"
    },
    {
        creditHours: 3,
        number: 311,
        name: "نظم المعلومات المتكاملة"
    },
    {
        creditHours: 3,
        number: 321,
        name: "سلوكيات المعلومات"
    },
    {
        creditHours: 3,
        number: 330,
        name: "شبكات المعلومات"
    },
    {
        creditHours: 3,
        number: 361,
        name: "تحليل المحتوى المتقدم"
    },
    {
        creditHours: 3,
        number: 371,
        name: "تنمية مصادر المعلومات"
    },
    {
        creditHours: 3,
        number: 381,
        name: "الأرشفة الالكترونية"
    },
    {
        creditHours: 3,
        number: 391,
        name: "التطبيقات المعلوماتية للانترنت"
    },
    {
        creditHours: 3,
        number: 401,
        name: "استرجاع المعلومات"
    },
    {
        creditHours: 3,
        number: 411,
        name: "أخلاقيات المعلومات وتشريعاتها"
    },
    {
        creditHours: 3,
        number: 421,
        name: "المكتبات الرقمية"
    },
    {
        creditHours: 3,
        number: 431,
        name: "إدارة السجلات الالكترونية"
    },
    {
        creditHours: 3,
        number: 451,
        name: "تسويق المعلومات"
    },
    {
        creditHours: 3,
        number: 461,
        name: "النشر الإلكتروني"
    },
    {
        creditHours: 3,
        number: 471,
        name: "مشروع التخرج"
    },
    {
        creditHours: 1,
        number: 481,
        name: "التدريب العملي"
    }
];

var infoMgmtCourses = [
    {
        creditHours: 3,
        number: 211,
        name: "أساسيات إدارة المعلومات"
    },
    {
        creditHours: 3,
        number: 212,
        name: "المعلومات والمجتمع"
    },
    {
        creditHours: 2,
        number: 213,
        name: "أخلاقيات الحاسب"
    },
    {
        creditHours: 3,
        number: 231,
        name: "مصادر وخدمات المعلومات"
    },
    {
        creditHours: 3,
        number: 321,
        name: "تنظيم المعلومات"
    },
    {
        creditHours: 3,
        number: 314,
        name: "التفاعل بين الإنسان والمعلومات"
    },
    {
        creditHours: 3,
        number: 322,
        name: "إدارة المحتوى"
    },
    {
        creditHours: 3,
        number: 323,
        name: "استرجاع المعلومات"
    },
    {
        creditHours: 3,
        number: 315,
        name: "أنظمة وسياسات المعلومات"
    },
    {
        creditHours: 3,
        number: 371,
        name: "التنقيب في البيانات"
    },
    {
        creditHours: 3,
        number: 341,
        name: "تطوير التطبيقات"
    },
    {
        creditHours: 3,
        number: 351,
        name: "إدارة المشاريع"
    },
    {
        creditHours: 3,
        number: 481,
        name: "​إدارة معلومات قطاع الأعمال"
    },
    {
        creditHours: 3,
        number: 425,
        name: "​الويب الدلالي​"
    },
    {
        creditHours: 3,
        number: 482,
        name: "​إدارة المعلومات الصحية"
    },
    {
        creditHours: 3,
        number: 416,
        name: "​اقتصاديات المعرفة"
    },
    {
        creditHours: 3,
        number: 442,
        name: "​الحوسبة السحابية"
    },
    {
        creditHours: 3,
        number: 472,
        name: "​تحليل وقياسات البيانات"
    },
    {
        creditHours: 3,
        number: 473,
        name: "​تحليل البيانات الضخمة"
    },
    {
        creditHours: 3,
        number: 484,
        name: "​​موضوعات مختارة"
    },
    {
        creditHours: 3,
        number: 432,
        name: "​​النشر الإلكتروني"
    },
    {
        creditHours: 3,
        number: 483,
        name: "​​إدارة المعرفة"
    },
    {
        creditHours: 3,
        number: 433,
        name: "​​تسويق المعلومات"
    },
    {
        creditHours: 3,
        number: 424,
        name: "​​إدارة السجلات والأرشفة الإلكترونية"
    },
    {
        creditHours: 1,
        number: 461,
        name: "​مشروع تخرج 1"
    },
    {
        creditHours: 3,
        number: 462,
        name: "مشروع التخرج 2"
    }
];




// ** Science College ** \\
var mathCourses = [
    {
        creditHours: 4,
        number: 101,
        name: "حساب التفاضل والتكامل ١"
    },
    {
        creditHours: 4,
        number: 113,
        name: "حساب التفاضل والتكامل التطبيقي ١"
    },
    {
        creditHours: 4,
        number: 114,
        name: "حساب التفاضل والتكامل التطبيقي ٢"
    },
    {
        creditHours: 4,
        number: 227,
        name: "جبر خطي ومعادلات تفاضلية"
    }
];

var statCourses = [
    {
    creditHours: 3,
    number: 111,
    name: "مقدمة في الاحتمالات والإحصاء"
    }
];

var physCourses = [
    {
        creditHours: 3,
        number: 103,
        name: "الفيزياء العامة"
    },
    {
        creditHours: 3,
        number: 104,
        name: "فيزياء تطبيقية"
    }
];

// ** MGMT College ** \\
var accoCourses = [
    {
    creditHours: 3,
    number: 100,
    name: "مبادئ المحاسبة"
    }
];

var econCourses = [
    {
    creditHours: 2,
    number: 100,
    name: "مبادئ الاقتصاد"
    }
];

var mgmtCourses = [
    {
        creditHours: 3,
        number: 100,
        name: "مقدمة في إدارة الأعمال"
    },
    {
        creditHours: 3,
        number: 325,
        name: "السلوك التنظيمي"
    },
    {
        creditHours: 2,
        number: 462,
        name: "إدارة الجودة الشاملة"
    }
];

// ** English College ** \\
var engCourses = [
    {
        creditHours: 3,
        number: 140,
        name: "اللغة الإنجليزية ١"
    },
    {
        creditHours: 3,
        number: 190,
        name: "اللغة الإنجليزية ٢"
    },
    {
        creditHours: 3,
        number: 208,
        name: "الكتابة التقنية"
    }
];

// ** General Courses ** \\
var qurCourses = [
    {
        creditHours: 1,
        number: 101,
        name: "القرآن الكريم ١"
    },
    {
        creditHours: 1,
        number: 151,
        name: "القرآن الكريم ٢"
    },
    {
        creditHours: 1,
        number: 201,
        name: "القرآن الكريم ٣"
    },
    {
        creditHours: 1,
        number: 251,
        name: "القرآن الكريم ٤"
    },
    {
        creditHours: 1,
        number: 301,
        name: "القرآن الكريم ٥"
    },
    {
        creditHours: 1,
        number: 351,
        name: "القرآن الكريم ٦"
    },
    {
        creditHours: 1,
        number: 401,
        name: "القرآن الكريم ٧"
    },
    {
        creditHours: 1,
        number: 451,
        name: "القرآن الكريم ٨"
    }
];

var aqdCourses = [
    {
    creditHours: 2,
    number: 133,
    name: "التوحيد"
    }
];

var fqhCourses = [
    {
    creditHours: 2,
    number: 200,
    name: "الفقه"
    }
];

var nhoCourses = [
    {
        creditHours: 2,
        number: 104,
        name: "النحو"
    },
    {
        creditHours: 2,
        number: 201,
        name: "النحو التطبيقي"
    }
];

var elmCourses = [
    {
    creditHours: 2,
    number: 207,
    name: "مهارات الاتصال"
    }
];

var trkCourses = [
    {
    creditHours: 2,
    number: 101,
    name: "السيرة النبوية"
    },
    {
        creditHours: 2,
        number: 102,
        name: "تاريخ المملكة العربية السعودية"
    }
];

var thqfCourses = [
    {
    creditHours: 2,
    number: 101,
    name: "الثقافة الإسلامية"
    }
];

var adbCourses = [
    {
        creditHours: 2,
        number: 102,
        name: "التحرير العربي"
    }
];

var daoCourses = [
    {
        creditHours: 2,
        number: 129,
        name: "الدعوة الإصلاحية"
    }
];
