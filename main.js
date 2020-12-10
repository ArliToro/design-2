// let square1 = document.querySelector(".square-1");
// let square2 = document.querySelector(".square-2");
// let square3 = document.querySelector(".square-3");
// let square4 = document.querySelector(".square-4");
// let circle1 = document.querySelector(".circle-1");
// let circle2 = document.querySelector(".circle-2");
// let circle3 = document.querySelector(".circle-3");
// let circle4 = document.querySelector(".circle-4");
// let circle5 = document.querySelector(".circle-5");
// let circle6 = document.querySelector(".circle-6");

let svgItems = document.querySelectorAll("svg > g > g");
let transition1 = ["matrix(1,0,0,1,1704.53,83.365)", "matrix(1,0,0,1,1336.4659,194.976)", "matrix(1,0,0,1,1131.071,291.302)","matrix(1,0,0,1,-5.357,345.613)","matrix(1,0,0,1,1851.326,88.57)","matrix(1,0,0,1,1611.111,503.833)","matrix(1,0,0,1,1578.854,522.661)","matrix(1,0,0,1,1161.9672,720.5482)","matrix(1,0,0,1,235.543,752.837)","matrix(1,0,0,1,202.375,784.587)"];
let transition2 = ["matrix(0.766,0.6428,-0.6428,0.766,1631.9103,124.4188)", "matrix(1,0,0,1,1270.4659,194.976)", "matrix(1,0,0,1,1191.071,251.302)","matrix(1,0,0,1,-105.357,325.613)","matrix(0.766,0.6428,-0.6428,0.766,1661.7296,173.5968)","matrix(1,0,0,1,1555.611,455.833)","matrix(1,0,0,1,1542.2893,522.661)","matrix(1,0,0,1,1221.9711,680.548)","matrix(1,0,0,1,135.543,732.837)","matrix(1,0,0,1,129.875,788.087)"];
let transition3 = ["matrix(0.9816,0.1908,-0.1908,0.9816,1823.7091,116.5156)", "matrix(0.9781,-0.2079,0.2079,0.9781,1446.8712,190.5818)", "matrix(0.9976,0.0698,-0.0698,0.9976,1283.1022,146.6889)","matrix(0.9976,-0.0698,0.0698,0.9976,-146.5736,167.2745)","matrix(0.9816,0.1908,-0.1908,0.9816,1919.6322,241.0711)","matrix(1,0,0,1,1547.611,455.833)","matrix(1,0,0,1,1722.354,662.661)","matrix(0.9976,0.0698,-0.0698,0.9976,1159.9833,565.0447)","matrix(0.9976,-0.0698,0.0698,0.9976,122.1461,556.7021)"];
let transition4 = ["matrix(0.9816,0.1908,-0.1908,0.9816,1535.7091,80.5156)", "matrix(0.9781,-0.2079,0.2079,0.9781,1382.8712,190.5818)", "matrix(0.9976,0.0698,-0.0698,0.9976,1443.1022,192.6889)","matrix(0.9976,-0.0698,0.0698,0.9976,-146.5736,167.2745)","matrix(0.9816,0.1908,-0.1908,0.9816,1601.6315,265.071)","matrix(1,0,0,1,1320.111,509.333)","matrix(1,0,0,1,1678.354,622.661)","matrix(0.9976,0.0698,-0.0698,0.9976,1319.984,573.0452)","matrix(0.9976,-0.0698,0.0698,0.9976,20.3957,556.9525)"];

document.addEventListener("DOMContentLoaded", () => {
    let options = {
        root: null,
        rootMargin: "-150px -50px",
        threshold: 1
    };
    let observer = new IntersectionObserver(beTouching, options);
    document.querySelectorAll(".page-content > div").forEach(p => {
        observer.observe(p);
    });
});
function beTouching(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("part-1")){
                for (let i = 0; i < svgItems.length;i++){
                    svgItems[i].style.transform = transition1[i];
                }
            }
            if (entry.target.classList.contains("part-2")){
                for (let i = 0; i < svgItems.length;i++){
                    svgItems[i].style.transform = transition2[i];
                }
            }
            if (entry.target.classList.contains("part-3")){
                for (let i = 0; i < svgItems.length;i++){
                    svgItems[i].style.transform = transition3[i];
                }
            }
            if (entry.target.classList.contains("part-4")){
                for (let i = 0; i < svgItems.length;i++){
                    svgItems[i].style.transform = transition4[i];
                }
            }

        }
    });
}
