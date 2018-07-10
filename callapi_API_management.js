var instanceid2;
var Private_Ip_Instance;
var Status_instance;

function getinformation() 
{
	document.getElementById('LoadIcon').style.display='block';
	var instance_id = document.getElementById("InputPrivateIp").value;
	var url_api = "https://6bblx4poja.execute-api.us-east-1.amazonaws.com/avanxo/carvajal/information/";	
	url_api= url_api + instance_id;

	var response;
	var Name_instance;
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) 
		{
			response=JSON.parse(this.responseText);
			var longitud_array=response.Reservations.length;
			if (longitud_array==0)
			{
				alert("RECURSO NO ENCONTRADO, VERIFIQUE QUE LA IP NO TENGA ESPACIOS");
				alert("SI EL SERVIDOR ESTÁ UTILIZANDO MÁS DE UNA DIRECCION IP, USE LA PRIMERA ");
				location.reload();
			}
			else
			{
				
				var stopbtn = document.getElementById("stopBtn");
				var startbtn = document.getElementById("startBtn");
				var refhbtn = document.getElementById("refhBtn")							
				var newshbtn = document.getElementById("newshBtn");
			
				stopbtn.addEventListener("click",stopInstance);
				startbtn.addEventListener("click",startInstance);
				refhbtn.addEventListener("click",getinformation);
				newshbtn.addEventListener("click",NewSearch);
				
				
				var longitud_tags= response.Reservations["0"].Instances["0"].Tags.length;
				for (var i=0; i < longitud_tags; i++)
				{
					if (response.Reservations["0"].Instances["0"].Tags[i].Key == "Name")
					{
					Name_instance=response.Reservations["0"].Instances["0"].Tags[i].Value;
					}
			
				}
	
				instanceid2= response.Reservations["0"].Instances["0"].InstanceId;
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
		}
	 
      };
	xhttp.open("GET", url_api, true);
	xhttp.send();	
}

function stopInstance() 
{
	if( compareStatus(Status_instance) == 0)
		alert("La instancia ya está Detenida");
	else {
	
	var notification1 = confirm("La instancia con IP  " + Private_Ip_Instance + "  va a ser DETENIDA, click en Aceptar para continuar");
	if(notification1 == true)
		{
			document.getElementById('LoadIcon').style.display='block';
			var url_api = "https://6bblx4poja.execute-api.us-east-1.amazonaws.com/avanxo/carvajal/stop/";	
			url_api= url_api + instanceid2;
			var response;
				
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {

				if (this.readyState == 4 && this.status == 200) {
					response=JSON.parse(this.responseText);
					document.getElementById('LoadIcon').style.display='none';
					getinformation();
     
					}
			};
			xhttp.open("GET", url_api, true);
			xhttp.send();	
			}
	   }	
}


function startInstance() 
{
	if(compare2Status(Status_instance)== 0)
		alert("La Instancia ya se encuentra en estado Running");
	else
	{
	
		var notification1 = confirm("La instancia con IP  " + Private_Ip_Instance + "  va a ser INICIADA, click en Aceptar para continuar");
		if(notification1 == true)
			{
				document.getElementById('LoadIcon').style.display='block';
				var url_api = "https://6bblx4poja.execute-api.us-east-1.amazonaws.com/avanxo/carvajal/start/";	
				url_api= url_api + instanceid2;
	
				var response;
		
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
	
					if (this.readyState == 4 && this.status == 200) {
						response=JSON.parse(this.responseText);
						document.getElementById('LoadIcon').style.display='none';
						getinformation();
					 }
	
				};
		xhttp.open("GET", url_api, true);
		xhttp.send();	
			}
	}
}

function NewSearch() 
{
  location.reload();
}

function compareStatus(Status)
{
  var x="stopped";

  if( Status.localeCompare(x) == 0)
	return 0;
  else
	return 1;

}

function compare2Status(Status2)
{
  var x="running";
 
  if(Status2.localeCompare(x)==0)
	return 0;
  else
	return 1;
}


