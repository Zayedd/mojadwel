// ** CS College ** \\
var csCourses = [
    // New Curriculum
    {
        number: 114,
        name: "تراكيب محددة ١",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 150,
        name: "مقدمة في برمجة الحاسبات",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 151,
        name: "البرمجة الشيئية",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 125,
        name: "تصميم المنطق الرقمي",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 180,
        name: "الأمن السيبراني والأخلاقيات",
        creditHours: 2,
        curriculum: 2
    },
    {
        number: 205,
        name: "تراكيب محددة ٢",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 252,
        name: "تراكيب البيانات",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 228,
        name: "عمارة الحاسبات",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 216,
        name: "تحليل وتصميم الخوارزميات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 290,
        name: "هندسة البرمجيات ١",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 222,
        name: "أنظمة التشغيل",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 330,
        name: "شبكات الحاسب",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 361,
        name: "الذكاء الاصطناعي",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 392,
        name: "هندسة البرمجيات ٢",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 370,
        name: "مبادئ قواعد البيانات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 351,
        name: "التفاعل بين الإنسان والحاسوب",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 383,
        name: "ندوة التطوير المهني",
        creditHours: 2,
        curriculum: 2
    },
    {
        number: 362,
        name: "التدريب العملي",
        creditHours: 1,
        curriculum: 2
    },
    {
        number: 334,
        name: "أمن المعلومات",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 445,
        name: "المترجمات",
        creditHours: 4,
        curriculum: 2
    },
    {
        number: 427,
        name: "النظم الموزعة",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 495,
        name: "مشروع التخرج ١",
        creditHours: 2,
        curriculum: 2
    },
    {
        number: 497,
        name: "مشروع التخرج ٢",
        creditHours: 3,
        curriculum: 2
    },



    // Old Curriculum
    {
        number: 104,
        name: "تراكيب محددة",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 106,
        name: "المنطق الرقمي",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 140,
        name: "برمجة الحاسبات ١",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 141,
        name: "برمجة الحاسبات ٢",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 215,
        name: "تصميم وتحليل الخوارزميات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 220,
        name: "تنظيم حاسبات وبرمجة التجميع",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 221,
        name: "عمارة الحاسبات",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 224,
        name: "تنظيم الحاسبات",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 225,
        name: "أساسيات أنظمة الحاسبات",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 242,
        name: "تراكيب البيانات",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 310,
        name: "هندسة البرمجيات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 322,
        name: "نظم التشغيل",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 330,
        name: "شبكات الحاسب",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 340,
        name: "ذكاء اصطناعي",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 344,
        name: "مبادئ لغات البرمجة",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 370,
        name: "مبادئ قواعد البيانات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 391,
        name: "ندوة",
        creditHours: 1,
        curriculum: 1
    },
    {
        number: 401,
        name: "التحليل العددي للحوسبة",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 403,
        name: "نظرية الرسومات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 432,
        name: "أمن الشبكات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 438,
        name: "تقنيات الانترنت",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 439,
        name: "حوسبة السحاب",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 445,
        name: "المترجمات",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 452,
        name: "التفاعل بين الإنسان والحاسب",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 471,
        name: "نظم إدراة قواعد البيانات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 480,
        name: "التدريب العملي",
        creditHours: 1,
        curriculum: 1
    },
    {
        number: 492,
        name: "مشروع تخرج ١",
        creditHours: 2,
        curriculum: 1
    },
    {
        number: 493,
        name: "مشروع تخرج ٢",
        creditHours: 4,
        curriculum: 1
    },
];

var isCourses = [
    // New Curriculum
    {
        number: 201,
        name: "أسس نظم المعلومات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 230,
        name: "تحليل متطلبات الأعمال",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 220,
        name: "مقدمة في قواعد البيانات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 321,
        name: "نظم إدارة قواعد البيانات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 230,
        name: "تحليل متطلبات الأعمال",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 350,
        name: "نظم دعم اتخاذ القرار",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 335,
        name: "تحليل وتصميم النظم",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 352,
        name: "نظم المعلومات الجغرافية",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 370,
        name: "تفاعل الإنسان مع الحاسب",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 372,
        name: "تجربة المستخدم",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 323,
        name: "نظم إدارة المعرفة",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 354,
        name: "نظم المعلومات الصحية",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 384,
        name: "موضوعات مختارة في نظم المعلومات ١",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 336,
        name: "إدارة مشاريع نظم المعلومات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 380,
        name: "الأمن السيبراني",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 337,
        name: "تطوير التطبيقات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 398,
        name: "التدريب العملي",
        creditHours: 1,
        curriculum: 2
    },
    {
        number: 401,
        name: "علاقات الأعمال",
        creditHours: 1,
        curriculum: 2
    },
    {
        number: 460,
        name: "الأعمال الالكترونية",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 492,
        name: "أمن المعلومات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 495,
        name: "مشروع تخرج ١",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 410,
        name: "بنية المؤسسات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 482,
        name: "استراتيجية وسياسة نظم المعلومات",
        creditHours: 3,
        curriculum: 2
    },
    {
        number: 496,
        name: "مشروع تخرج ٢",
        creditHours: 3,
        curriculum: 2
    },


    // Old Curriculum
    {
        number: 200,
        name: "مدخل إلى نظم المعلومات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 203,
        name: "برمجة الويب",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 229,
        name: "مقدمة في قواعد البيانات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 320,
        name: "مقدمة في قواعد البيانات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 309,
        name: "تحليل وتصميم النظم",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 320,
        name: "مقدمة في قواعد البيانات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 332,
        name: "نظم دعم اتخاذ القرار",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 339,
        name: "تحليل وتصميم النظم",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 371,
        name: "إدارة قواعد البيانات التطبيقية",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 391,
        name: "ندوة",
        creditHours: 1,
        curriculum: 1
    },
    {
        number: 394,
        name: "هندسة المتطلبات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 395,
        name: "موضوعات مختارة في نظم المعلومات ١",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 396,
        name: "موضوعات مختارة في نظم المعلومات ٢",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 397,
        name: "موضوعات مختارة في نظم المعلومات ٣",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 414,
        name: "تصميم وبناء الأعمال الالكترونية",
        creditHours: 4,
        curriculum: 1
    },
    {
        number: 433,
        name: "أمن المعلومات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 441,
        name: "إدارة المشاريع",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 459,
        name: "نظم معلومات المؤسسات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 489,
        name: "أمن المعلومات",
        creditHours: 3,
        curriculum: 1
    },
    {
        number: 497,
        name: "مشروع التخرج ١",
        creditHours: 2,
        curriculum: 1
    },
    {
        number: 498,
        name: "مشروع التخرج ٢",
        creditHours: 4,
        curriculum: 1
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
        number: 101,
        name: "حساب التفاضل والتكامل ١",
        creditHours: 4
    },
    {
        number: 102,
        name: " حساب التفاضل والتكامل ٢",
        creditHours: 4
    },
    {
        number: 113,
        name: "حساب التفاضل والتكامل التطبيقي ١",
        creditHours: 4
    },
    {
        number: 114,
        name: "حساب التفاضل والتكامل التطبيقي ٢",
        creditHours: 4
    },
    {
        number: 227,
        name: "جبر خطي ومعادلات تفاضلية",
        creditHours: 4
    }
];

var statCourses = [
    {
    number: 111,
    name: "مقدمة في الاحتمالات والإحصاء",
    creditHours: 3,
    }
];

var physCourses = [
    {
        number: 103,
        name: "الفيزياء العامة",
        creditHours: 3,
    },
    {
        number: 104,
        name: "فيزياء تطبيقية",
        creditHours: 3,
    }
];

// ** MGMT College ** \\
var accoCourses = [
    {
    number: 100,
    name: "مبادئ المحاسبة",
    creditHours: 3,
    }
];

var econCourses = [
    {
    number: 100,
    name: "مبادئ الاقتصاد",
    creditHours: 2,
    },
    {
        number: 101,
        name: "الاقتصاد الجزئي",
        creditHours: 3,
    },
    {
        number: 105,
        name: "الاقتصاد الجزئي",
        creditHours: 3,
    }
];

var mgmtCourses = [
    {
        number: 100,
        name: "مقدمة في إدارة الأعمال",
        creditHours: 3,
    },
    {
        number: 325,
        name: "السلوك التنظيمي",
        creditHours: 3,
    },
    {
        number: 462,
        name: "إدارة الجودة الشاملة",
        creditHours: 2,
    }
];

var mktCourses = [
    {
        number: 301,
        name: "مبادئ التسويق",
        creditHours: 2,
    },
];

var finCourses = [
    {
        number: 300,
        name: "مبادئ المالية",
        creditHours: 3,
    },
];

// ** English College ** \\
var engCourses = [
    {
        number: 140,
        name: "اللغة الإنجليزية ١",
        creditHours: 3,
    },
    {
        number: 190,
        name: "اللغة الإنجليزية ٢",
        creditHours: 3,
    },
    {
        number: 141,
        name: "انجليزي ٢",
        creditHours: 3,
    },
    {
        number: 208,
        name: "الكتابة التقنية",
        creditHours: 3,
    },
    {
        number: 210,
        name: "الكتابة التقنية",
        creditHours: 3,
    }
];

// ** General Courses ** \\
var qurCourses = [
    {
        number: 101,
        name: "القرآن الكريم ١",
        creditHours: 1,
    },
    {
        number: 151,
        name: "القرآن الكريم ٢",
        creditHours: 1,
    },
    {
        number: 201,
        name: "القرآن الكريم ٣",
        creditHours: 1,
    },
    {
        number: 251,
        name: "القرآن الكريم ٤",
        creditHours: 1,
    },
    {
        number: 301,
        name: "القرآن الكريم ٥",
        creditHours: 1,
    },
    {
        number: 351,
        name: "القرآن الكريم ٦",
        creditHours: 1,
    },
    {
        number: 401,
        name: "القرآن الكريم ٧",
        creditHours: 1,
    },
    {
        number: 451,
        name: "القرآن الكريم ٨",
        creditHours: 1,
    }
];

var aqdCourses = [
    {
    number: 133,
    name: "التوحيد",
    creditHours: 2,
    }
];

var fqhCourses = [
    {
    number: 200,
    name: "الفقه",
    creditHours: 2,
    },
    {
        number: 206,
        name: "فقه التعاملات الإلكترونية",
        creditHours: 2,
    }
];

var nhoCourses = [
    {
        number: 104,
        name: "النحو",
        creditHours: 2,
    },
    {
        number: 105,
        name: "النحو",
        creditHours: 2,
    },
    {
        number: 201,
        name: "النحو التطبيقي",
        creditHours: 2,
    }
];

var elmCourses = [
    {
    number: 207,
    name: "مهارات الاتصال",
    creditHours: 2,
    }
];

var trkCourses = [
    {
    number: 101,
    name: "السيرة النبوية",
    creditHours: 2,
    },
    {
        number: 102,
        name: "تاريخ المملكة العربية السعودية",
        creditHours: 2,
    }
];

var thqfCourses = [
    {
    number: 101,
    name: "الثقافة الإسلامية",
    creditHours: 2,
    }
];

var adbCourses = [
    {
        number: 102,
        name: "التحرير العربي",
        creditHours: 2,
    }
];

var daoCourses = [
    {
        number: 129,
        name: "الدعوة الإصلاحية",
        creditHours: 2,
    }
];
