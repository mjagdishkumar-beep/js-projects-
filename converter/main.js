document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsoutput").innerText = kgs * 2.2046;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsoutput").innerText = feet * 30.48;
})