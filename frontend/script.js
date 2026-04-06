function searchStudent() {
    const regNo = document.getElementById("regNo").value;
    fetch(`http://localhost:5000/student/${regNo}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("result");
            if(data.error){
                resultDiv.innerHTML = data.error;
            } else {
                resultDiv.innerHTML = `
                    <p><b>First Name:</b> ${data.first_name}</p>
                    <p><b>Last Name:</b> ${data.last_name}</p>
                    <p><b>Subjects:</b> ${data.subjects.join(", ")}</p>
                    <p><b>CGPA:</b> ${data.cgpa}</p>
                `;
            }
        });
}