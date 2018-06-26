var instanceid2;

function getinformation() 
{
document.getElementById('LoadIcon').style.display='block';
var instance_id = document.getElementById("InputPrivateIp").value;
var url_api = "https://6bblx4poja.execute-api.us-east-1.amazonaws.com/avanxo/carvajal/information/";	
url_api= url_api + instance_id;

// varaibles usadas para entregar los resultados
//var instanceid2;
var response;
var Name_instance;

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {


if (this.readyState == 4 && this.status == 200) {
     response=JSON.parse(this.responseText);
     console.log(response);
     instanceid2= response.Reservations["0"].Instances["0"].InstanceId;
     Name_instance= response.Reservations["0"].Instances["0"].Tags[0].Value;
     Status_instance= response.Reservations["0"].Instances["0"].State.Name;
     Private_Ip_Instance= response.Reservations["0"].Instances["0"].PrivateIpAddress;
     document.getElementById('InputIp').style.display='none';
     document.getElementById('TableResults').style.display='block';
     document.getElementById('nameT').innerHTML = Name_instance;
     document.getElementById('statusT').innerHTML = Status_instance;
     document.getElementById('InstanceIdT').innerHTML = instanceid2;
     document.getElementById('PrivateIpT').innerHTML = Private_Ip_Instance;
     document.getElementById('LoadIcon').style.display='none';
	 }
 
      };
  xhttp.open("GET", url_api, true);
  xhttp.send();	
}

function stopInstance() 
{
document.getElementById('LoadIcon').style.display='block';
var url_api = "https://6bblx4poja.execute-api.us-east-1.amazonaws.com/avanxo/carvajal/stop/";	
url_api= url_api + instanceid2;

// varaibles usadas para entregar los resultados
var response;
var Name_instance;

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {


if (this.readyState == 4 && this.status == 200) {
     response=JSON.parse(this.responseText);
     document.getElementById('LoadIcon').style.display='none';
     alert("stopping instancia");
      
	 }
      };
  xhttp.open("GET", url_api, true);
  xhttp.send();	
}

function startInstance() 
{
document.getElementById('LoadIcon').style.display='block';
var url_api = "https://6bblx4poja.execute-api.us-east-1.amazonaws.com/avanxo/carvajal/start/";	
url_api= url_api + instanceid2;

// varaibles usadas para entregar los resultados
var response;
var Name_instance;

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {


if (this.readyState == 4 && this.status == 200) {
     response=JSON.parse(this.responseText);
     document.getElementById('LoadIcon').style.display='none';
     alert("Starting  instancia");

	 }
      };
  xhttp.open("GET", url_api, true);
  xhttp.send();	
}


function rebootInstance() 
{
alert(instanceid2);
var url_api = "https://6bblx4poja.execute-api.us-east-1.amazonaws.com/avanxo/carvajal/reboot/";	
url_api= url_api + instanceid2;

// varaibles usadas para entregar los resultados
var response;
var Name_instance;

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {


if (this.readyState == 4 && this.status == 200) {
     response=JSON.parse(this.responseText);
         alert("Starting  instancia");

	 }
      };
  xhttp.open("GET", url_api, true);
  xhttp.send();	
}


function NewSearch() 
{
location.reload();
}



