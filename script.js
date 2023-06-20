function Sub(){
    var name, email, web, image, gender, skill2,skill1,skill3;
    name=(document.getElementById('aname').value);
    email=(document.getElementById('aemail').value);
    web=(document.getElementById('aweb').value);
    image=(document.getElementById('aimagelink').value);
    if (name != "" && email != "" && web != "" && image != "" && (document.getElementById('agender').checked || document.getElementById('bgender').checked) && (document.getElementById('ch1').checked || document.getElementById('ch2').checked || document.getElementById('ch3').checked))
    {
    if(document.getElementById('agender').checked)
    {
        console.log("boy");
        gender="MALE";
    }
    else if(document.getElementById('bgender').checked)
    {
        console.log("girl");
        gender="FEMALE";
    }
    if(document.getElementById('ch1').checked )
    {
       skill1="HTML";

    }
    else{
        skill1 ="";
    }
    if(document.getElementById('ch2').checked)
    {
        
        skill2="CSS";
    }
    else{
        skill2 ="";
    }
    if(document.getElementById('ch3').checked)
    {
       skill3="JS";
    
    }
    else{
        skill3 ="";
    }
    // Calculating Total
    // sum=k+r+e+v;
    // avg=sum/4;
    // // Display on Student Data
    var newTable = document.getElementById('TableScore');
    var row = newTable.insertRow(-1);
    var cell6 = row.insertCell(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(0);
    var cell4 = row.insertCell(0);
    var cell5 = row.insertCell(0);


    cell5.innerHTML= name;
    cell3.innerHTML=web;
    cell2.innerHTML = image;
    cell1.innerHTML=gender;
    cell4.innerHTML=email;
    cell6.innerHTML=skill1+ " " + skill2 + " " + skill3;

    name="";
    email="";
    web="";
    image="";
    
}
}