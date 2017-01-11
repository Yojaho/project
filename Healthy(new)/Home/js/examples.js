
/*
 * Example :
 *   - solid color fill
 *   - custom start angle
 *   - custom line cap
 */
$('.forth.circle').circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value:  0.75,
    lineCap: 'round',
     fill: { gradient: [['#3bd9b2', .5], ['#3bd994', .5]], gradientAngle: Math.PI / 4 }
});

$("canvas").eq(1).css({"position": "absolute","left":"0"});
