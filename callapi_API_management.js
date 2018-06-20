function callAPI() 
{
var instance_id = document.getElementById("id_instance").value;
var url_api = "https://6bblx4poja.execute-api.us-east-1.amazonaws.com/carvajal/information/";	
url_api= url_api + instance_id;

// varaibles usadas para entregar los resultados
var  instanceid2;
var response;
var Name_instance;

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {


if (this.readyState == 4 && this.status == 200) {
//       alert(this.responseText);
       response=JSON.parse(this.responseText);
       console.log(response);
       instanceid2= response.Reservations["0"].Instances["0"].InstanceId;
	   Name_instance=response.Reservations["0"].Instances["0"].Tags[1].Value;
	   document.getElementById('field_instance_id').innerHTML = "Instance-Id------->" + instanceid2;
	   document.getElementById('Name-instance').innerHTML = "Name------->" + Name_instance; 
	 }
      };
  xhttp.open("GET", url_api, true);
  xhttp.send();	
//document.write(response.Reservations["0"].Instances["0"].InstanceId);
}
