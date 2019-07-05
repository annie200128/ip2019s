/*

*/


function start(e) {
    var name=[
        {
            char: '簡',
            big5: 'C2B2',
            cns: '1-767C',
            unicode: '7C21'
        },
        {
            char: '妤',
            big5: 'A7B1',
            cns: '1-4971',
            unicode: '59A4'
        },
        {
            char:'安',
            big5: 'A677',
            cns: '1-4778',
            unicode: '5B89'
        }
    ];

    var ele = document.getElementById("div1");

    for (var i = 0; i < 3; i++) {
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5 = ';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns = ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode = ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
