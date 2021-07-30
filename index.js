var selectedRow = null;
var l = 0;
var m = 0;
var userData = [];
//Function for viewing data
function dataView(actionId, indexData) {
    console.log(actionId, indexData, "action details");
    let mb = "";
//To delete row in the table
    if (actionId.id == "dd") {
        row = actionId.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        userData.splice(indexData, 1)
       window.z=window.no--;
       // console.log(indexData,"indeeeeeexxx");
        console.log(userData,"userdata");
        console.log(userData.lenght,"userdatalength");
        if(window.z<=1){
            window.x=1;
            tb=`<td colspan="9" class="b15"><b>No data available in table</b></td>`
            document.getElementById("u_data").innerHTML = tb;
            
         }
    }
//To update the values in the form
    else if (actionId.id == "ud") {
        document.getElementById("d_submit").style.display = "none";
        document.getElementById("d_update").style.display = "inline-block";
        document.getElementById("d_reset").style.display = "none";
        document.getElementById("d_add").style.display = "inline-block";
        document.getElementById("f_edit").style.display = "inline";
        document.getElementById("p_edit").style.display = "inline";
        document.getElementById("file").style.display = "none";
        document.getElementById("photo").style.display = "none";
      //  document.getElementById("bl1").style.filter = "blur(0px)";
      //  document.getElementById("bl").style.filter = "blur(0px)";
      //  document.getElementById("bl2").style.filter = "blur(0px)";
        userData.forEach((element, index) => {
            if (index == indexData) {
                localStorage.setItem("viewElement", index);
                mb = element;
            }
        });
        console.log(mb, "mb value");
        document.getElementById("name").value = mb.name;
        document.getElementById("name").disabled = false;
        document.getElementById("dob").value = mb.dob;
        document.getElementById("dob").disabled = false;
        document.getElementById("age").value = mb.age;
        document.getElementById("age").disabled = false;
        document.getElementById("course").value = mb.course;
        document.getElementById("course").disabled = false;
        document.getElementById("email").value = mb.email;
        document.getElementById("email").disabled = false;
        document.getElementById("phone").value = mb.phone;
        document.getElementById("phone").disabled = false;
        document.getElementById("file7").style.display = "inline-block";
        document.getElementById("photo7").style.display = "inline-block";
        document.getElementById("file7").innerHTML = mb.file.replace(" ", "_").replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("pdf");
        document.getElementById("photo7").innerHTML = mb.photo.replace(" ", "_").replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("jpg");
    } else {
 //To view the data in the form
        document.getElementById("d_submit").style.display = "none";
        document.getElementById("d_update").style.display = "none";
        document.getElementById("d_reset").style.display = "none";
        document.getElementById("d_add").style.display = "inline-block";
        document.getElementById("file").style.display = "none";
        document.getElementById("photo").style.display = "none";
        document.getElementById("f_edit").style.display = "none";
        document.getElementById("p_edit").style.display = "none";
      //  document.getElementById("bl1").style.filter = "blur(0px)";
      //  document.getElementById("bl").style.filter = "blur(0px)";
      //  document.getElementById("bl2").style.filter = "blur(0px)";

        userData.forEach((element, index) => {
            if (index == indexData) {
                localStorage.setItem("viewElement", index);
                mb = element;
            }
        });
        console.log(mb, "mb value");
        document.getElementById("name").value = mb.name;
        document.getElementById("name").disabled = true;
        document.getElementById("dob").value = mb.dob;
        document.getElementById("dob").disabled = true;
        document.getElementById("age").value = mb.age;
        document.getElementById("age").disabled = true;
        document.getElementById("course").value = mb.course;
        document.getElementById("course").disabled = true;
        document.getElementById("email").value = mb.email;
        document.getElementById("email").disabled = true;
        document.getElementById("phone").value = mb.phone;
        document.getElementById("phone").disabled = true;
        document.getElementById("file7").style.display = "inline-block";
        document.getElementById("photo7").style.display = "inline-block";
        document.getElementById("file7").innerHTML = mb.file.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("pdf");
        document.getElementById("file_box2").download = mb.file.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("pdf");
        document.getElementById("photo7").innerHTML = mb.photo.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("jpg");
        document.getElementById("img_box2").download = mb.photo.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(mb.dat).concat(".").concat("jpg");
       
    }
}
//To add extra form details
function add_more() {
   resetForm();
    document.getElementById("name").disabled = false;
    document.getElementById("dob").disabled = false;
    document.getElementById("age").disabled = false;
    document.getElementById("course").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("phone").disabled = false;
    document.getElementById("d_add").style.display = "none";
    document.getElementById("d_submit").style.display = "inline-block";
    document.getElementById("d_reset").style.display = "inline-block";
    document.getElementById("file").style.display = "inline-block";
    document.getElementById("photo").style.display = "inline-block";
    document.getElementById("file7").style.display = "none";
    document.getElementById("photo7").style.display = "none";
    document.getElementById("f_edit").style.display = "none";
    document.getElementById("p_edit").style.display = "none";
    document.getElementById("d_update").style.display = "none";
  //  document.getElementById("bl1").style.filter = "blur(0px)";
  //  document.getElementById("bl").style.filter = "blur(0px)";
  //  document.getElementById("bl2").style.filter = "blur(0px)";
}

var d;
function onFormSubmit() {
    
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var dateTime = date + '-' + time;
    d = dateTime.toString();
//Validating the form
    if (validate()) {
        let data = {
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            age: document.getElementById("age").value,
            course: document.getElementById("course").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            file: document.getElementById("file").value,
            photo: document.getElementById("photo").value,
            dat: d,
            base_64_string: base64String,
            img_base_64_string: imageBase64String
        };
        userData.push(data);

        tableForm();
        resetForm();
    }
}
//Converting file into base64 string
let base64String = "";
function fileUploaded() {
    var file = document.getElementById("file").value.replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.');
    var file5 = document.querySelector('input[type=file]')['files'][0];
    var reader = new FileReader();
    reader.onload = function () {
        base64String = reader.result;
        console.log(base64String, "string for copy");
    }
    reader.readAsDataURL(file5);
}
//To display file on table
var view_b64 = null
function view_base_64(indexData) {
    let nb = "";
    var elemen;
    console.log(indexData, "action details");
    userData.forEach((elemen, index) => {
        if (index == indexData) {
            nb = elemen;

        }
    }
    );
    var s = base64String;
    document.getElementById("base_64").src = nb.base_64_string;
    document.getElementById("file_box4").href = nb.base_64_string;
    if (view_b64 === null) {
        document.getElementById("viewbox").style.display = "block";
        view_b64 = true
    } else {
        document.getElementById("viewbox").style.display = "none";
        view_b64 = null
    }
}
//Converting image into base64 string
let imageBase64String = "";
function imageUploaded() {
    var img = document.getElementById("photo").value.replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.');
    var file6 = document.querySelector('input[name=photo]')['files'][0];
    var reader = new FileReader();
    reader.onload = function () {
        imageBase64String = reader.result;
        console.log(imageBase64String, "image string");
    }
    reader.readAsDataURL(file6);
}
//To display image on table
var box = null
function img_base_64(indexData) {
    let ib = "";
    var elemen1;
    console.log(indexData, "action details");
    userData.forEach((elemen1, index) => {
        if (index == indexData) {
            ib = elemen1;

        }
    }
    );


    document.getElementById("imgBase_64").src = ib.img_base_64_string;
    document.getElementById("img_box3").href = ib.img_base_64_string;

    if (box === null) {
        document.getElementById("filebox").style.display = "block";
        box = true
    } else {
        document.getElementById("filebox").style.display = "none";
        box = null
    }
}
//Updating the form
function updateForm() {
    document.getElementById("d_submit").style.display = "inline-block";
    document.getElementById("d_update").style.display = "none";
    document.getElementById("d_reset").style.display = "inline-block";
    document.getElementById("d_add").style.display = "none";
    document.getElementById("file7").style.display = "none";
    document.getElementById("photo7").style.display = "none";
    document.getElementById("f_edit").style.display = "none";
    document.getElementById("p_edit").style.display = "none";
    document.getElementById("file").style.display="inline-block";
    
    document.getElementById("photo").style.display="inline-block";
   // document.getElementById("bl1").style.filter = "blur(0px)";
   // document.getElementById("bl").style.filter = "blur(0px)";
   // document.getElementById("bl2").style.filter = "blur(0px)";
    if (validate()) {
        var today = new Date();
        var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
        var dateTime = date + '-' + time;
        d = dateTime.toString();
        let updateId = localStorage.getItem("viewElement");
        let data = {
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            age: document.getElementById("age").value,
            course: document.getElementById("course").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            file: document.getElementById("file").value,
            photo: document.getElementById("photo").value,
            dat: d,
            base_64_string: base64String,
            img_base_64_string: imageBase64String
        };
       // console.log(userData, "before update");
        userData[updateId] = data;
        window.a=window.no;
        window.c=2;
       // console.log(window.a,"update id")
        //console.log(userData, "after update");
        tableForm();
        resetForm();
    }
   
}
//Getting index number
function vv_photo(index_Data) {
    window.ph = index_Data;
}
//To display photo
view_b64_photo = null;
function v_photo() {
    var i_b = "";
    console.log(window.ph, "action details");
    userData.forEach((elemen2, index_) => {
        if (index_ == window.ph) {
            i_b = elemen2;

        }
    }
    );

    document.getElementById("img_box1").src = i_b.img_base_64_string;
    document.getElementById("img_box2").href = i_b.img_base_64_string;

    if (view_b64_photo === null) {
        document.getElementById("img_box").style.display = "block";
        view_b64_photo = true
    } else {
        document.getElementById("img_box").style.display = "none";
        view_b64_photo = null
    }
}
//Getting index number
function vv_file(index_data) {
    window.fh = index_data;
}
//To display the file
view_b64_file = null;
function v_file() {
    var j_b = "";
    console.log(window.fh, "action details");
    userData.forEach((elemen3, index_s) => {
        if (index_s == window.fh) {
            j_b = elemen3;

        }
    }
    );

    document.getElementById("file_box1").src = j_b.base_64_string;
    document.getElementById("file_box2").href = j_b.base_64_string;
    if (view_b64_file === null) {
        document.getElementById("file_box").style.display = "block";
        view_b64_file = true
    } else {
        document.getElementById("file_box").style.display = "none";
        view_b64_file = null
    }
}
//Editing the file
function file_edit() {
    document.getElementById("file7").style.display = "none";
    document.getElementById("file").style.display = "inline-block";
    document.getElementById("f_edit").style.display = "none";

}
//Editing the photo
function photo_edit() {
    document.getElementById("photo7").style.display = "none";
    document.getElementById("photo").style.display = "inline-block";
    document.getElementById("p_edit").style.display = "none";

}
//Getting values from the form
function readFormData() {
    return true;
}
//Creating the table
window.x=1;
function tableForm() {
     tb = "";
    userData.forEach((element, index) => {
        console.log(element, index, "element,index");
        tb = tb + `<tr><td>${element.name}</td>
        <td>${element.dob}</td>
        <td>${element.age}</td>
        <td>${element.course}</td>
        <td>${element.email}</td>
        <td>${element.phone}</td>
        <td class="pointer" onclick="view_base_64(${index})">${element.file.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(element.dat).concat(".").concat("pdf")}</td>
        <td class="pointer" onclick="img_base_64(${index})">${element.photo.split(' ').join('_').replace("C:\\fakepath\\", "").split('.').slice(0, -1).join('.').concat("_").concat(element.dat).concat(".").concat("jpg")}</td>
        <td><button style="padding:15px;" class="b11" id="vi"onclick="dataView(this,${index});vv_photo(${index});vv_file(${index});">VIEW</button><button style="padding:15px;" class="b11" id="ud" onclick="dataView(this,${index})">UPDATE</button><button style="padding:15px;background-color:red;" class="b11" id="dd" onclick="dataView(this,${index})">DELETE</button></td></tr>`
    });
    
    if(tb==""){
       tb=`<td colspan="9"class="b15"><b>No data available in table</b></td>`
       document.getElementById("u_data").innerHTML = tb;
       
    
    }else{
      
       window.no=window.x++;
        console.log(window.no,"else");
    
    console.log(window.no,"window no");
    document.getElementById("u_data").innerHTML = tb;
}
    
   }
  

window.c=1;
// Reset form after data is submitted
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("file").value = "";
    document.getElementById("photo").value = "";
}
//To hide the table
function hideTable() {
    document.getElementById('employeeList1').style.display = "none";
    document.getElementById("bl").style.filter = "blur(0px)";
    document.getElementById("bl1").style.filter = "blur(0px)";
    document.getElementById("bl2").style.filter = "blur(0px)";
}
//To show the table
function showTable() {
    
    document.getElementById("employeeList1").style.display = "inline-block";
   // document.getElementById("bl").style.filter = "blur(6px)";
  //  document.getElementById("bl1").style.filter = "blur(6px)";
  //  document.getElementById("bl2").style.filter = "blur(6px)";
    
}
// Form validation
function validate() {
    var name1 = document.getElementById("name");
    var dob1 = document.getElementById("dob");
    var age1 = document.getElementById("age");
    var course1 = document.getElementById("course");
    var phone1 = document.getElementById("phone");
    var email1 = document.getElementById("email");
    var file1 = document.getElementById("file");
    var photo1 = document.getElementById("photo");
    var filePath = document.getElementById('file').value;
    var photoPath = document.getElementById('photo').value;
    var ag = document.getElementById("age").value;
    var fileExtensions = /(\.pdf)$/i;
    var photoExtensions = /(\.jpg|\.jpeg)$/i;
    var nam = /^(?!^ +$)([\w -&]+)$/;
    var phn = /^([0-9]{10})+$/;
    var mail = /^([A-Za-z0-9_.])+\@([a-z0-9])+\.([a-z])+$/;
    if (name1.value.trim() == "") {
        alert("Please Enter Your Name");
        return false;
    } else if (!nam.test(name1.value)) {
        alert("Use Only Alphabets   ");
        return false;
    } else if (dob1.value.trim() == "") {
        alert("Please Enter Your Dob");
        return false;
    } else if (age1.value.trim() == "") {
        alert("Please Enter Your Age");
        return false;
    } else if (ag < 0 || ag > 200) {
        alert("Please Enter Your Age Between 0-200");
    } else if (course1.value.trim() == "") {
        alert("Please Enter Your Course");
        return false;
    } else if (email1.value.trim() == "") {
        alert("Please Enter Your Email");
        return false;
    } else if (!mail.test(email1.value)) {
        alert("Please Enter Valid Email Address ");
        return false;
    } else if (phone1.value.trim() == "") {
        alert("Please Enter Your Phone Number");
        return false;
    } else if (!phn.test(phone1.value)) {
        alert("Use Only 10 Digit Numbers   ");
        return false;
    } else if (file1.value == "") {
        alert("Please Upload Your Certificate");
        return false;
    } else if (!fileExtensions.exec(filePath)) {
        alert('Please Upload Your File In Pdf Format');
        return false;
    } else if (photo1.value == "") {
        alert("Please Upload Your Photo");
        return false;
    } else if (!photoExtensions.exec(photoPath)) {
        alert('Please Upload Your Photo In Jpg Format');
        return false;
    }
    else {
        return true;
    }
}
var box = null
function pop1() {
    if (box === null) {
        document.getElementById("filebox").style.display = "block";
        box = true
    } else {
        document.getElementById("filebox").style.display = "none";
        box = null
    }
}
var view = null
function pop2() {
    if (view === null) {
        document.getElementById("viewbox").style.display = "block";
        view = true
    } else {
        document.getElementById("viewbox").style.display = "none";
        view = null
    }
}
var view1 = null
function pop3() {
    if (view1 === null) {
        document.getElementById("img_box").style.display = "block";
        view1 = true
    } else {
        document.getElementById("img_box").style.display = "none";
        view1 = null
    }
}
var view2 = null
function pop4() {
    if (view2 === null) {
        document.getElementById("file_box").style.display = "block";
        view2 = true
    } else {
        document.getElementById("file_box").style.display = "none";
        view2 = null
    }
}
