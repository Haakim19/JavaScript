// Select the P tag with the id.
        // print content inside the p tag using innerHTML
        // paragraph = document.getElementById('one')
        // paragraph.textContent = 'Zoro'
        // console.log(paragraph.textContent);

// Select the h1 tag with the id.
        // print content inside the h1 tag
        // heading = document.getElementById('title')
        // heading.textContent = 'Hello'
        // console.log(heading.textContent);

//select the input tag with the id
        var box1 = document.getElementById('num1')
        var box2 = document.getElementById('num2')
        var result = document.getElementById('result')

        function add(){
            var box1Value = Number(box1.value) 
            var box2Value = Number(box2.value)
            result.textContent = box1Value + box2Value
        }

        function clearBox(){
            box1.value = ''
            box2.value = ''
            result.innerText = 'Result'
        }