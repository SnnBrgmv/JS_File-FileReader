let input = document.getElementById('inputFile');

// input.addEventListener('change', (event) => {
//   let fileList = event.target.files;
//   console.log(fileList);
// });

input.addEventListener("change", () => {
    console.log(input.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.onload = () => {
        console.log((reader.result));
    };
},
);