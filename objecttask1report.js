
let message='';
let student;
let search;


function print(message) {
    let list =document.getElementById("output")
    list.innerHTML=message;
}
function getReport(student) {
    let report='<br><h2> name: '+student.Name+'</h2>';
    report+='<p> track: '+student.Track+'</p>';
    report+='<p> achievement: '+student.Achievements+'</p>';
    report+='<p> points: '+student.Points+'</p>';
    return report;
}


while (true) {
  search=prompt("search a student record by typing its fullname ie 'obinna ikeh' or 'exit' to end search")
  if (search=== null || search.toLowerCase()==="exit") {
    break;
  };
for (var i = 0; i < students.length; i+=1) {
    student=students[i];
    if (student.Name===search.toLowerCase()) {
        message=getReport(student);
        print(message);
    }
  }
 }

