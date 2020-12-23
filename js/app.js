/**==========================================**/
//                 Sentry                     //
/**==========================================**/
Sentry.init({ dsn: 'https://263919ea7d9541ffb2c8312a1429dad0@sentry.io/1457804' });

/**==========================================**/
//              Global Variables              //
/**==========================================**/

// Used with every section in Table array to manage add and remove
var id = 1;
// Used To Know Gender
var isMale;
// Used to alert the user if exceeded credit hours limit.
var totalCredits = 0;

/**==========================================**/
//                 Functions                  //
/**==========================================**/
// TODO: Refactor to get courses from the backend
function showCourseNumbers(arry) {
    $("option[value='courseNumber']").remove();
    $("select[name='course-no'] optgroup").remove();

    let oldCourses = [];
    let newCourses = [];
    arry.forEach(function(element){
        if (element.curriculum && element.curriculum === 2) {
            let el = $("<option value='courseNumber'></option>").text(element.number + " - " + element.name);
            newCourses.push(el);
        } else {
            let el = $("<option value='courseNumber'></option>").text(element.number + " - " + element.name);
            oldCourses.push(el);
        }
    });

    if (newCourses.length > 0) {
        let optGroup1 = $("<optgroup label='الخطة الجديدة' />")
        optGroup1.append(newCourses);
        $("select[name='course-no']").append(optGroup1);

        let optGroup2 = $("<optgroup label='الخطة القديمة' />")
        optGroup2.append(oldCourses);
        $("select[name='course-no']").append(optGroup2);
    } else {
        oldCourses.forEach(c => $("select[name='course-no']").append(c));
    }
}

// TODO: Move to Backend
function getTextTime(tbody) {
    var textTime = "";
    var allTRs = $(tbody).find('tr');
    var allTDs;
    var days, time;
    for(var i = 1; i < allTRs.length; i++){
        allTDs = $(allTRs[i]).find('td');
        // Return an empty times array when no time is provided
        if (
            $(allTDs[1]).text() === "TBA" || $(allTDs[1]).text() === "" || $(allTDs[1]).text() === " " ||
            $(allTDs[2]).text() === "TBA" || $(allTDs[2]).text() === "" || $(allTDs[2]).text() === " "
        ) {
            return "لا يوجد محاضرة";
        }
        // Exclude Exam Rows
        if ($(allTDs[0]).text() === "اختبار"){
            continue;
        }
        time = $(allTDs[1]).text();

        if (time.indexOf(":") === 2 && time.lastIndexOf(":") === 13) {
            time = time.substring(11,16) + ' - ' + time.substring(0,5);
        } else if (time.indexOf(":") === 2 && time.lastIndexOf(":") === 12) {
            time = time.substring(10,15) + ' - ' + time.substring(0,5);
        } else if (time.indexOf(":") === 1 && time.lastIndexOf(":") === 11) {
            time = time.substring(10,14) + ' - ' + time.substring(0,4);
        } else if (time.indexOf(":") === 1 && time.lastIndexOf(":") === 12) {
            time = time.substring(10,15) + ' - ' + time.substring(0,4);
        }
        days = $(allTDs[2]).text();
        textTime += time + " : " + days + "<br/>";
    }
    return textTime
        .replaceAll("U", "أحد ")
        .replaceAll("M", "اثنين ")
        .replaceAll("T", "ثلاثاء ")
        .replaceAll("W", "أربعاء ")
        .replaceAll("R", "خميس ");
}
// TODO: Move to Backend
function getTeacherName(tbody) {
    var teacherName = "";
    var allTRs = $(tbody).find('tr');
    var allTDs = $(allTRs[1]).find('td');
    teacherName = $(allTDs[6]).text().replace("(P)", "");
    return teacherName;
}
// TODO: Move to Backend
function getNumberOfDay(charachterOfDay) {
    switch (charachterOfDay) {
        case 'U': return 1;
        case 'M': return 2;
        case 'T': return 3;
        case 'W': return 4;
        case 'R': return 5;
    }
}
// TODO: Move to Backend
function getTimesArray(tbody) {
    var times = [];
    var timeSlots = [];
    var location = "";
    var allTRs = $(tbody).find('tr');
    var allTDs;
    for(var i = 1; i < allTRs.length; i++){
        allTDs = $(allTRs[i]).find('td');
        // Return an empty times array when no time is provided
        if (
            $(allTDs[1]).text() === "TBA" || $(allTDs[1]).text() === "" || $(allTDs[1]).text() === " " ||
            $(allTDs[2]).text() === "TBA" || $(allTDs[2]).text() === "" || $(allTDs[2]).text() === " "
        ) {
            return [];
        }
        // Exclude Exam Rows
        if ($(allTDs[0]).text() === "اختبار"){
            continue;
        }
        // Location
        location = isMale? $(allTDs[3]).text().substring(20) : $(allTDs[3]).text().substring(28);
        // Time
        var days = $(allTDs[2]).text();
        var fromTo = $(allTDs[1]).text();
        var startHour = fromTo.charAt(1) === ":" ? Number(fromTo.substring(0, 1)) : Number(fromTo.substring(0, 2));
        var startMinute = fromTo.charAt(1) === ":" ? Number(fromTo.substring(2, 4)) : Number(fromTo.substring(3, 5));
        var lastIndexOfColon = fromTo.lastIndexOf(":");
        var endHour = Number(fromTo.substring(lastIndexOfColon - 2, lastIndexOfColon));
        var endMinute = Number(fromTo.substring(lastIndexOfColon + 1, lastIndexOfColon + 3));
        while ( !(startHour === endHour && startMinute === endMinute) ) {
            timeSlots.push((String(startHour).length === 1? "0" + String(startHour) : String(startHour)) + (String(startMinute).length === 1? "0" + String(startMinute) : String(startMinute)));
            startMinute += 5;
            if (startMinute === 60) {
                startMinute = 0;
                startHour++;
            }
            if (startHour === 13)
                startHour = 1;
        }
        for (var j = 0; j < days.length; j++) {
            times.push({
                day: getNumberOfDay(days.charAt(j)),
                times: timeSlots.slice(0),
                location: location
            });
        }
        timeSlots.length = 0;
    }
    return times;
}
function getColor() {
    for (var h = 0; h < colors.length; h++) {
        if (colors[h].isUsed == false){
            colors[h].isUsed = true;
            return colors[h].color;
        }
    }
    return "#45aaf2";
}
function getDayOfLecture(number) {
    switch (number) {
        case 1: return "الأحد";
        case 2: return "الاثنين";
        case 3: return "الثلاثاء";
        case 4: return "الأربعاء";
        case 5: return "الخميس";
    }
}
function getIndexOfDeletedSection(id) {
    for (var i = 0; i < table.array.length; i++) {
        if (table.array[i].id === id)
            return i;
    }
    return -1;
}
function getEndOfLectureTimeForTimetable(hours, minutes) {
    minutes = Number(minutes);
    minutes += 5;
    minutes = String(minutes);
    if (minutes.length === 1) {
        return hours + ":" + "0" + minutes;
    } else if (minutes === "60"){
        var hoursPlusOne = String(Number(hours) + 1);
        if (hoursPlusOne === "13")
            hoursPlusOne = "1";
        return (hoursPlusOne.length === 2? hoursPlusOne : "0" + hoursPlusOne) + ":" + "00";
    } else {
        return hours + ":" + minutes;
    }
}
// TODO: Move to Backend
function getCreditHours(dep, number) {
    var courseObject;
    switch (dep) {
        case "cs": courseObject = csCourses; break;
        case "is": courseObject = isCourses; break;
        case "it": courseObject = itCourses; break;
        case "infoStudies": courseObject = infoStudiesCourses; break;
        case "infoMgmt": courseObject = infoMgmtCourses; break;

        case "math": courseObject = mathCourses; break;
        case "stat": courseObject = statCourses; break;
        case "phys": courseObject = physCourses; break;

        case "acco": courseObject = accoCourses; break;
        case "econ": courseObject = econCourses; break;
        case "mgmt": courseObject = mgmtCourses; break;

        case "eng": courseObject = engCourses; break;

        case "qur": courseObject = qurCourses; break;
        case "aqd": courseObject = aqdCourses; break;
        case "fqh": courseObject = fqhCourses; break;
        case "nho": courseObject = nhoCourses; break;
        case "elm": courseObject = elmCourses; break;
        case "trk": courseObject = trkCourses; break;
        case "thqf": courseObject = thqfCourses; break;
        case "adb": courseObject = adbCourses; break;
        case "dao": courseObject = daoCourses; break;
    }

    var creditHours = courseObject.find(o => o.number === number).creditHours;
    return creditHours;
}
// TODO: Move to Backend
function getFinalExam(tbody) {
    var allTRs = $(tbody).find('tr');
    var allTDs;
    var time = "";
    var date = "لا يوجد";
    for(var i = 1; i < allTRs.length; i++){
        allTDs = $(allTRs[i]).find('td');
        if ($(allTDs[0]).text() === "اختبار"){
            time = $(allTDs[1]).text();
            date = $(allTDs[4]).text();
        }
    }
    return {time: time, date: date};
}
function checkForFinalExamConflicts(lastAddedElement) {
    if (lastAddedElement.finalExam.date === "لا يوجد") {
        return;
    }

    table.array.forEach(function(params) {
        if (params.finalExam.date === lastAddedElement.finalExam.date && lastAddedElement.crn !== params.crn) {
            if (params.finalExam.time === lastAddedElement.finalExam.time) {
                setTimeout(() => {
                    swal("لديك تعارض في وقت الاختبار النهائي!", "هناك مادتان لهما نفس يوم ووقت الاختبار النهائي:\n" +
                                                                params.dep + "-" + params.number + "-" + params.name + "\n" +
                                                                lastAddedElement.dep + "-" + lastAddedElement.number + "-" + lastAddedElement.name, {
                        buttons: "حسناً",
                        icon: "error"
                    });
                }, 1000);
            } else {
                setTimeout(() => {
                    swal("لديك اختباران نهائيان في نفس اليوم!", params.dep + "-" + params.number + "-" + params.name + "\n" +
                                                                lastAddedElement.dep + "-" + lastAddedElement.number + "-" + lastAddedElement.name, {
                        buttons: "حسناً",
                        icon: "error"
                    });
                }, 1000);
            }
        }
    });
}
// TODO: Refactor
function addFoundedSectionToSections(allTitles, sectionDeatils, sectionID, chosenCourseDep, chosenCourseNumber) {
    //allDeatis will be an array of "tr" objects of each row of datadisplaytable tables
    var allDetails = $(allTitles).parent().next().find("tbody")[0];
    var teacher = getTeacherName(allDetails);
    sections.array.push({
        id: sectionID,
        dep: sectionDeatils[2].substring(0, 3),
        number: sectionDeatils[2].substring(4, 7),
        name: sectionDeatils[0],
        section: sectionDeatils[3],
        crn: sectionDeatils[1],
        time: getTimesArray(allDetails),
        teacher: teacher,
        creditHours: getCreditHours(chosenCourseDep, chosenCourseNumber),
        finalExam: getFinalExam(allDetails)
    });
    var lastAddedSection = sections.array[sections.array.length - 1];
    $("table#sections-table tbody").append(
        "<tr id=\"" + sectionID + "\">" +
        "<td>"+ lastAddedSection.dep + " - " +
        lastAddedSection.number + " - " +
        lastAddedSection.name + "</td>" +
        "<td>" + lastAddedSection.creditHours + "</td>" +
        "<td>" + lastAddedSection.section + "</td>" +
        "<td>" + teacher + "</td>" +
        "<td class='crn'>" + lastAddedSection.crn + "</td>" +
        "<td dir='ltr'>" + getTextTime(allDetails) + "</td>" +
        "<td>" +
        "<img src=\"img/Add_Enable.svg\" class=\"add svg-button\"/><img src=\"img/Add_Disable.svg\" class=\"add-disabled svg-button d-none\"/>" +
        "</td>" +
        "</tr>"
    );
    // Color rows
    if (sectionID % 2 === 0) {
        $("table#sections-table tbody tr").last().css("background-color", "aliceblue");
    }
    // If section is already in timetable disable its add section button
    var crn = sectionDeatils[1];
    for (var j = 0; j < table.array.length; j++) {
        if (table.array[j].crn === crn) {
            var addSectionButton = $("#" + sectionID + " .add");
            addSectionButton.toggleClass("d-none");
            addSectionButton.siblings().toggleClass("d-none");
            break;
        }
    }
}
// TODO: Refactor to Call the Backend
function findSections(allTitles, chosenCourseDep, chosenCourseNumber) {
    var sectionDeatils;
    var sectionID = 0;
    var sectionBranch;
    var sectionLocation;
    if (isMale) {
        for (var i = 0; i < allTitles.length; i++) {
            sectionDeatils = $(allTitles[i]).text().split(" - ");
            sectionBranch = $(allTitles[i]).parent().next().text();
            sectionBranch = sectionBranch.substr(sectionBranch.indexOf("الفرع"), 37).trim();
            sectionLocation = $(allTitles[i]).parent().next().text();
            sectionLocation = sectionLocation.substr(sectionLocation.indexOf("النوع"));
            console.log(sectionLocation.includes("الحاسب"));
            if (
                Math.floor(sectionDeatils[3]/10) === 17
                ||
                (chosenCourseDep == "phys" && chosenCourseNumber === 103 && sectionDeatils[3] === "071")
                ||
                (chosenCourseDep == "phys" && chosenCourseNumber === 103 && sectionDeatils[3] === "072")
                ||
                (chosenCourseDep == "phys" && chosenCourseNumber === 103 && sectionDeatils[3] === "073")
                ||
                (chosenCourseDep == "eng" && chosenCourseNumber === 140 && sectionDeatils[3] === "074")
                ||
                (chosenCourseDep == "cs" && sectionDeatils[3] === "071")
                ||
                (chosenCourseDep == "cs" && sectionDeatils[3] === "072")
                ||
                (chosenCourseDep == "cs" && sectionDeatils[3] === "073")
                ||
                (chosenCourseDep == "cs" && sectionDeatils[3] === "074")
                ||
                (chosenCourseDep == "thqf" && sectionDeatils[3].startsWith("0"))
                ||
                sectionDeatils[3].includes("E") && sectionBranch.includes("الفرع المدينة الجامعية انتظام - طلاب") && sectionLocation.includes("الحاسب")
            ) {
                addFoundedSectionToSections(allTitles[i], sectionDeatils, sectionID, chosenCourseDep, chosenCourseNumber);
                sectionID++;
            }
        }
        /**Female Student**/
    } else {
        for (var i = 0; i < allTitles.length; i++) {
            sectionDeatils = $(allTitles[i]).text().split(" - ");
            sectionBranch = $(allTitles[i]).parent().next().text();
            sectionBranch = sectionBranch.substr(sectionBranch.indexOf("الفرع"), 37).trim();
            sectionLocation = $(allTitles[i]).parent().next().text();
            sectionLocation = sectionLocation.substr(sectionLocation.indexOf("النوع"));
            console.log(sectionLocation.includes("الحاسب-طالبات"));
            if (
                Math.floor(sectionDeatils[3]/10) === 37
                ||
                (
                    (chosenCourseDep == "it" || chosenCourseDep == "nho" || chosenCourseDep == "mgmt" || chosenCourseDep == "phys" || chosenCourseDep == "eng" || chosenCourseDep == "cs" || chosenCourseDep == "is" || chosenCourseDep == "infoStudies")
                    && Math.floor(sectionDeatils[3]/10) === 27
                )
                ||
                sectionDeatils[3].includes("E") && sectionBranch.includes("الفرع مد الملك عبدالله انتظام-طالبات") && sectionLocation.includes("الحاسب-طالبات")
                ||
                (chosenCourseDep == "eng" && chosenCourseNumber === 140 && sectionDeatils[3] === "380")
                ||
                (chosenCourseDep == "thqf" && sectionDeatils[3].startsWith("3") && sectionDeatils[3] !== "397")
            ) {
                addFoundedSectionToSections(allTitles[i], sectionDeatils, sectionID, chosenCourseDep, chosenCourseNumber);
                sectionID++;
            }
        }
    }

}
function addSectionToTimetable(addSectionButton, rowID) {
    // Check for time conflict
    var conflictMessage = "يوجد تعارض مع الشعب التالية : \n";
    var conflictExists = false;
    table.array.forEach(function (t) {
        t.time.forEach(function (t2) {
            sections.array[rowID].time.forEach(function (t3) {
                if (t3.day === t2.day) {
                    // loop through times array to detect conflict.
                    loop1:
                        for (var i = 0; i < t2.times.length; i++) {
                            for (var j = 0; j < t3.times.length; j++) {
                                if (t2.times[i] === t3.times[j]) {
                                    conflictMessage += t.dep + " " + t.number + " - " + t.section + " : يوم " + getDayOfLecture(t2.day) + " " + t2.times[i].substring(0, 2) + ':' + t2.times[i].substring(2, 4) + "\n";
                                    conflictExists = true;
                                    break loop1;
                                }
                            }
                        }
                }
            });
        });
    });

    if (conflictExists) {
        swal("هناك تعارض!", conflictMessage, "error", {button: "حسناً"});
    } else {
        addSectionButton.toggleClass("d-none"); // d-none
        $(addSectionButton).siblings().toggleClass("d-none");

        table.array.push(sections.array[rowID]);
        table.array[table.array.length - 1].id = id++;
        table.array[table.array.length - 1].color = getColor();

        // Update total credit hours
        totalCredits += table.array[table.array.length - 1].creditHours;
        $("#total-credits").html(totalCredits);

        var lastElementInTableArray = table.array[table.array.length - 1];
        var selectedCell;
        for (var i = 0; i < lastElementInTableArray.time.length; i++) {
            for (var j = 0; j < lastElementInTableArray.time[i].times.length; j++) {
                selectedCell = $('#timetable tbody tr#row' + lastElementInTableArray.time[i].times[j] + ' td.day' + lastElementInTableArray.time[i].day);
                if (j !== 0) {
                    selectedCell.remove();
                } else {
                    selectedCell.html(
                        '<span class="float-right">' + lastElementInTableArray.dep + ' ' + lastElementInTableArray.number + ' - ' + lastElementInTableArray.section + '</span>' +
                        '<span class="float-left d-none d-md-block">' + lastElementInTableArray.time[i].times[0].substring(0, 2) + ':' + lastElementInTableArray.time[i].times[0].substring(2, 4) + '</span><br>' +
                        '<span>' + (lastElementInTableArray.name.length > 9 ? lastElementInTableArray.name.substring(0, 9) + "..." : lastElementInTableArray.name) + '</span><br>' +
                        '<span class="float-right">' + lastElementInTableArray.time[i].location + '</span>' +
                        '<span class="float-left d-none d-md-block">' + getEndOfLectureTimeForTimetable(lastElementInTableArray.time[i].times[lastElementInTableArray.time[i].times.length - 1].substring(0, 2), lastElementInTableArray.time[i].times[lastElementInTableArray.time[i].times.length - 1].substring(2, 4)) + '</span>'
                    );
                    selectedCell.css('background-color', "");
                    selectedCell.attr('style', 'background-color: ' + lastElementInTableArray.color);
                    selectedCell.attr('rowspan', lastElementInTableArray.time[i].times.length);
                    selectedCell.addClass("cell-" + lastElementInTableArray.id + "-table");
                    selectedCell.addClass("filled-cell");
                }
            }
        }

        $("#added-sections-table tr:nth-child(1)").append('<td class="cell-' + lastElementInTableArray.id + '">' + lastElementInTableArray.dep + "-" + lastElementInTableArray.number + "-" + lastElementInTableArray.section + '</td>');
        $("#added-sections-table tr:nth-child(4)").append('<td class="cell-' + lastElementInTableArray.id + '">' + lastElementInTableArray.crn + '</td>');
        $("#added-sections-table tr:nth-child(2)").append('<td class="cell-' + lastElementInTableArray.id + '">' + lastElementInTableArray.creditHours + '</td>');
        $("#added-sections-table tr:nth-child(3)").append('<td class="cell-' + lastElementInTableArray.id + '" dir="ltr">' + lastElementInTableArray.finalExam.date.substring(0, 10) + "<br>" + lastElementInTableArray.finalExam.time + '</td>');
        $("#added-sections-table tr:nth-child(5)").append('<td class="cell-' + lastElementInTableArray.id + '"><img src="img/Delete.svg" class="remove-button svg-button"/></td>');

        // Show added sections table when first section is added
        if (table.array.length === 1) {
            $("#added-sections-table").toggleClass("d-none");
            $("#total-credits-table").toggleClass("d-none");
        }

        swal("تم إضافة الشعبة إلى الجدول بنجاح!", {
            buttons: false,
            timer: 1000,
            icon: "success"
        });

        // Alert the user if exceeded 19 credits
        if (totalCredits > 19) {
            setTimeout(() => {
                swal("تنبيه!", "لقد تجاوزت الحد المسموح به في عدد الوحدات(١٩ وحدة)", {
                    buttons: "حسناً",
                    icon: "error"
                });
            }, 1000);
        }

        // Check for final exams confilcts
        checkForFinalExamConflicts(table.array[table.array.length - 1]);

        // Add to DB
        DB.addToDB(table.array[table.array.length - 1]);
    }
}
function initTimeTable(sectionsArr) {
    if (sectionsArr.length > 0) {
        sectionsArr.forEach(function (t) {
            table.array.push(t);
            table.array[table.array.length - 1].color = getColor();

            // Update total credit hours
            totalCredits += table.array[table.array.length - 1].creditHours;
            $("#total-credits").html(totalCredits);

            var lastElementInTableArray = table.array[table.array.length - 1];
            var selectedCell;
            for (var i = 0; i < lastElementInTableArray.time.length; i++) {
                for (var j = 0; j < lastElementInTableArray.time[i].times.length; j++) {
                    selectedCell = $('#timetable tbody tr#row' + lastElementInTableArray.time[i].times[j] + ' td.day' + lastElementInTableArray.time[i].day);
                    if (j !== 0) {
                        selectedCell.remove();
                    } else {
                        selectedCell.html(
                            '<span class="float-right">' + lastElementInTableArray.dep + ' ' + lastElementInTableArray.number + ' - ' + lastElementInTableArray.section + '</span>' +
                            '<span class="float-left d-none d-md-block">' + lastElementInTableArray.time[i].times[0].substring(0, 2) + ':' + lastElementInTableArray.time[i].times[0].substring(2, 4) + '</span><br>' +
                            '<span>' + (lastElementInTableArray.name.length > 15 ? lastElementInTableArray.name.substring(0, 15) + "..." : lastElementInTableArray.name) + '</span><br>' +
                            '<span class="float-right">' + lastElementInTableArray.time[i].location + '</span>' +
                            '<span class="float-left d-none d-md-block">' + getEndOfLectureTimeForTimetable(lastElementInTableArray.time[i].times[lastElementInTableArray.time[i].times.length - 1].substring(0, 2), lastElementInTableArray.time[i].times[lastElementInTableArray.time[i].times.length - 1].substring(2, 4)) + '</span>'
                        );
                        selectedCell.css('background-color', "");
                        selectedCell.attr('style', 'background-color: ' + lastElementInTableArray.color);
                        selectedCell.attr('rowspan', lastElementInTableArray.time[i].times.length);
                        selectedCell.addClass("cell-" + lastElementInTableArray.id + "-table");
                        selectedCell.addClass("filled-cell");
                    }
                }
            }

            $("#added-sections-table tr:nth-child(1)").append('<td class="cell-' + lastElementInTableArray.id + '">' + lastElementInTableArray.dep + "-" + lastElementInTableArray.number + "-" + lastElementInTableArray.section + '</td>');
            $("#added-sections-table tr:nth-child(4)").append('<td class="cell-' + lastElementInTableArray.id + '">' + lastElementInTableArray.crn + '</td>');
            $("#added-sections-table tr:nth-child(2)").append('<td class="cell-' + lastElementInTableArray.id + '">' + lastElementInTableArray.creditHours + '</td>');
            $("#added-sections-table tr:nth-child(3)").append('<td class="cell-' + lastElementInTableArray.id + '" dir="ltr">' + lastElementInTableArray.finalExam.date.substring(0, 10) + "<br>" + lastElementInTableArray.finalExam.time + '</td>');
            $("#added-sections-table tr:nth-child(5)").append('<td class="cell-' + lastElementInTableArray.id + '"><img src="img/Delete.svg" class="remove-button svg-button"/></td>');

            // Show added sections table when first section is added
            if (table.array.length === 1) {
                $("#added-sections-table").toggleClass("d-none");
                $("#total-credits-table").toggleClass("d-none");
            }
        });
        swal("تم استعادة الشعب إلى الجدول!", {
            buttons: false,
            timer: 1000,
            icon: "success"
        });

    }
}
$.cssHooks.backgroundColor = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["background-color"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("background-color");
        if (bg.search("rgb") == -1)
            return bg;
        else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
};

/**==========================================**/
//                  Objects                   //
/**==========================================**/
//object to get sections and save them to sections array and add them to table array
var sections = {
    array: [],
    emptyArray: function () {
        this.array.length = 0;
    }
};
//object to deal with table
var table = {
    array: []
};
// colors object
var colors = [
    {
        color: "#45aaf2",
        isUsed: false
    },
    {
        color: "#4b6584",
        isUsed: false
    },
    {
        color: "#20bf6b",
        isUsed: false
    },
    {
        color: "#eb3b5a",
        isUsed: false
    },
    {
        color: "#ccae62",
        isUsed: false
    },
    {
        color: "#f7b731",
        isUsed: false
    },
    {
        color: "#fc848b",
        isUsed: false
    },
    {
        color: "#2f3640",
        isUsed: false
    },
    {
        color: "#192a56",
        isUsed: false
    },
    {
        color: "#7f8c8d",
        isUsed: false
    },
    {
        color: "#8854d0",
        isUsed: false
    },
    {
        color: "#278f85",
        isUsed: false
    }
];
//  indexedDB stuff
var DB = (function () {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    if (!window.indexedDB) {
        console.log("indexedDB is not supported on this browser.");
        return;
    }

    var request = window.indexedDB.open("MojadwelDB", 1),
        db,
        tx,
        store;

    request.onupgradeneeded = function (e) {
        var db = request.result,
            sectionsStore = db.createObjectStore("SectionsStore", {keyPath: "crn"});

        sectionsStore.createIndex("crn", "crn", {unique: true});
        sectionsStore.createIndex("id", "id", {unique: true});
        sectionsStore.createIndex("creditHours", "creditHours");
        sectionsStore.createIndex("dep", "dep");
        sectionsStore.createIndex("finalExam", "finalExam");
        sectionsStore.createIndex("name", "name");
        sectionsStore.createIndex("number", "number");
        sectionsStore.createIndex("section", "section");
        sectionsStore.createIndex("teacher", "teacher");
        sectionsStore.createIndex("time", "time");
    };

    request.onerror = function (e) {
        console.log("Error: ", e.target.errorCode);
    };

    request.onsuccess = function (e) {
        db = request.result;
        tx = db.transaction("SectionsStore", "readwrite");
        store = tx.objectStore("SectionsStore");

        var q = store.getAll();
        q.onsuccess = function() {
            // update id if exists some data in db
            q.result.forEach(function (t) {
                if (t.id >= id)
                    id = t.id + 1;
            });
            initTimeTable(q.result);
        };

        db.onerror = function (e) {
            console.log("Error: ", e.target.errorCode);
        }
    };

    return {
        addToDB: function (obj) {
            try {
                db = request.result;
                tx = db.transaction("SectionsStore", "readwrite");
                store = tx.objectStore("SectionsStore");
                store.put(obj);
            } catch (e) {
                console.error(e);
            }
        },
        removeFromDB: function (crn) {
            try {
                db = request.result;
                tx = db.transaction("SectionsStore", "readwrite");
                store = tx.objectStore("SectionsStore");
                store.delete(crn);
            } catch (e) {
                console.error(e);
            }
        }
    };

}());
/**==========================================**/
//              Event Listeners               //
/**==========================================**/
// Get gender and disable changing gender
$("select[name='gender']").change(function () {
    // Assign Gender
    isMale = $("select[name='gender'] option:selected").attr("value") === "male"? true : false;
    // Disable gender choice
    $(this).attr("disabled", "disabled");
    // Enable course department choice
    $("select[name='course-dep']").removeAttr("disabled");
    // Enable course number choice
    $("select[name='course-no']").removeAttr("disabled");
    // Remove unusable time rows when gender is chosen
    if (isMale) {
        $("#timetable tbody tr").slice(0, 6).remove();
    } else {
        $("#timetable tbody tr").slice(114).remove();
    }
});

// Change course numbers when department is changed
$("select[name='course-dep']").change(function () {
    let selectedDep = $("select[name='course-dep'] option:selected").attr("value");
    switch (selectedDep) {
        case "cs": showCourseNumbers(csCourses); break;
        case "is": showCourseNumbers(isCourses); break;
        case "it": showCourseNumbers(itCourses); break;
        case "infoStudies": showCourseNumbers(infoStudiesCourses); break;
        case "infoMgmt": showCourseNumbers(infoMgmtCourses); break;

        case "math": showCourseNumbers(mathCourses); break;
        case "stat": showCourseNumbers(statCourses); break;
        case "phys": showCourseNumbers(physCourses); break;

        case "acco": showCourseNumbers(accoCourses); break;
        case "econ": showCourseNumbers(econCourses); break;
        case "mgmt": showCourseNumbers(mgmtCourses); break;

        case "eng": showCourseNumbers(engCourses); break;

        case "qur": showCourseNumbers(qurCourses); break;
        case "aqd": showCourseNumbers(aqdCourses); break;
        case "fqh": showCourseNumbers(fqhCourses); break;
        case "nho": showCourseNumbers(nhoCourses); break;
        case "elm": showCourseNumbers(elmCourses); break;
        case "trk": showCourseNumbers(trkCourses); break;
        case "thqf": showCourseNumbers(thqfCourses); break;
        case "adb": showCourseNumbers(adbCourses); break;
        case "dao": showCourseNumbers(daoCourses); break;
    }
});

// Get sections button = Will get the page and send it to sections object to process it
$("#getSections").click(function () {
    // This variable stores chosen dep to deal with section number patterns problems (17x - 37x - ...)
    var chosenCourseDep = $("select[name='course-dep'] option:selected")[0].value;
    // This variable used to get credit hours for a course.
    var chosenCourseNumber = Number($("select[name='course-no'] option:selected").text().substring(0,3));

    // If didn't choose gender and dep and course warn the user
    if (isMale === undefined || $("select[name='course-dep']").val() === null || $("select[name='course-no']").val() === null) {
        swal("يجب عليك اختيار (طالب/طالبة) و (رمز المقرر) و (رقم المقرر) قبل عرض الشعب المتاحة", {
            button: "حسناً",
            icon: "info"
        });
        return;
    }

    var getSectionsButton = $("#getSections");
    var loader = $(".loader");
    var section = $("select[name='course-dep'] option:selected").text() + ' - ' + $("select[name='course-no'] option:selected").text();
    //Empty sections table
    $("#sections-table tbody tr").remove();
    //Empty sections array
    if (sections.array.length > 0) {
        sections.emptyArray();
    }
    //Remove get sections button - for not to receive more than one request at a time.
    getSectionsButton.attr('disabled', 'true');
    getSectionsButton.toggleClass('blue');
    getSectionsButton.toggleClass('gray');
    getSectionsButton.css('cursor', 'not-allowed');
    //Show loader
    loader.toggleClass("d-none");


    $.getJSON('https://www.whateverorigin.org/get?url=' +
        encodeURIComponent('https://iussb.imamu.edu.sa/PROD_ar/bwckctlg.p_disp_listcrse?term_in=144210&subj_in='
        + $("select[name='course-dep'] option:selected").text().substring(0,3) + '&crse_in='
        + $("select[name='course-no'] option:selected").text().substring(0,3)
        + '&schd_in=01') + '&callback=?', function(data){

        //this is the whole page
        var page = $($.parseHTML(data.contents.substring(3463, data.contents.length - 1764)));
        //allTitles will be an array of "th" objects which is like تراكيب محددة - 20332 - عال 104 - 173
        var allTitles = page.find('th.ddtitle');
        // Search for Sections
        findSections(allTitles, chosenCourseDep, chosenCourseNumber);
        // If didn't find any Section alert the user
        if (sections.array.length === 0) {
            swal("لا يوجد شعب متاحة لمادة:", section, "error", {button: "حسناً"});
        }

      // Discard trk sections due to strange section number patterns.
      if (isMale && chosenCourseDep === "trk" && chosenCourseNumber === 101) {
        swal("هناك شعب أخرى لمادة السيرة النبوية في كليات أخرى، من فضلك تأكد منها في ملف الشعب", {
          button: "حسناً",
          icon: "info"
        });
      }

        //Hide loader
        loader.toggleClass("d-none");
        //Show get sections button
        getSectionsButton.removeAttr('disabled');
        getSectionsButton.toggleClass('gray');
        getSectionsButton.toggleClass('blue');
        getSectionsButton.css('cursor', 'pointer');


    }).fail(function(){
        swal("تعذّر جلب الشعب", "تأكد من اتصالك بالانترنت", "error", {button: "حسناً"});
        //Hide loader
        loader.toggleClass("d-none");
        //Show get sections button
        getSectionsButton.removeAttr('disabled');
        getSectionsButton.toggleClass('gray');
        getSectionsButton.toggleClass('blue');
        getSectionsButton.css('cursor', 'pointer');
    });
});


// Add section button = send section to table and draw it to the table
// "Delegated events" adds event listeners to elements added after page load is completed.
$("#sections-table").on("click", ".add", function () {
    var rowID = $(this).parent().parent().attr("id");
    addSectionToTimetable($(this), rowID);
});

// Remove section from table
$("#added-sections-table").on("click", ".remove-button", function () {
    var id = Number($(this).parent().attr("class").substring(5));
    var cells = $(".cell-" + id + "-table");
    var details = $(".cell-" + id);
    var color = cells.first().css("background-color");
    var index = getIndexOfDeletedSection(id);
    // Remove cells from timetable
    cells.each(function () {
        $(this).empty();
        $(this).removeAttr("style");
        $(this).toggleClass("filled-cell");
        $(this).toggleClass("cell-" + id + "-table");
        $(this).removeAttr("rowspan");
    });
    // Add deleted cells
    table.array[index].time.forEach(function (t) {
        for (var i = 1; i < t.times.length; i++) {
            if (t.day === 1) {
                if (t.times[i].substring(2, 4) === "00"){
                    $('<td class="day' + t.day + '"></td>').insertAfter( $("#row" + t.times[i] + " th"));
                } else {
                    $("#row" + t.times[i]).prepend('<td class="day' + t.day + '"></td>');
                }

            } else {
                var days = $("#row" + t.times[i] + " td");
                // console.log(days, "#row" + t.times[i] + " td");
                var foundBigger = false;
                for (var j = 0; j < days.length; j++) {
                    if (Number($(days[j]).attr("class").substring(3)) > t.day) {
                        $('<td class="day' + t.day + '"></td>').insertBefore( $(days[j]));
                        foundBigger = true;
                        break;
                    }
                }
                // When tr is empty or there is no bigger number
                if (!foundBigger) {
                    $("#row" + t.times[i]).append('<td class="day' + t.day + '"></td>');
                }
                // days = $("#row" + t.times[i] + " td");
                // console.log(days, "#row" + t.times[i] + " td");
            }
        }
    });
    // Remove details from added sections table
    details.each(function () {
        $(this).remove();
    });
    // Clear add section button if exists in sections table.
    for (var i = 0; i < sections.array.length; i++) {
        if (sections.array[i].crn === table.array[index].crn) {
            var addSectionButton = $("#" + i + " .add-disabled");
            addSectionButton.toggleClass('d-none');
            addSectionButton.siblings().toggleClass("d-none");
        }
    }
    // Update total credit hours
    totalCredits -= table.array[index].creditHours;
    $("#total-credits").html(totalCredits);
    // Remove deleted section from DB
    DB.removeFromDB(table.array[index].crn);
    // Delete section from table array
    table.array.splice(index, 1);
    // Clear color from color object
    for(var i = 0; i < colors.length; i++){
        if (colors[i].color === color) {
            colors[i].isUsed = false;
            break;
        }
    }

    // Hide added sections table when empty
    if (table.array.length === 0) {
        $("#added-sections-table").toggleClass("d-none");
        $("#total-credits-table").toggleClass("d-none");
    }

    swal("تم إزالة الشعبة بنجاح!", {
        buttons: false,
        timer: 700,
        icon: "success"
    });
});

// Export timetable as an image
$("#export-as-image").click(function() {
    function saveAs(uri, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            //Firefox requires the link to be in the body
            document.body.appendChild(link);
            //simulate click
            link.click();
            //remove the link when done
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }
    html2canvas(document.querySelector('#timetable')).then(function(canvas) {
        saveAs(canvas.toDataURL(), 'جدول.png');
    });
});
