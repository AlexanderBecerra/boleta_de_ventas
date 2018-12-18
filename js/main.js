(function(){
    'use strict';
    document.addEventListener('DOMContentLoaded', function(){
        var tomador_nombre = document.getElementById('tomador_nombre') ;
        var tomador_ruc = document.getElementById('tomador_ruc') ;
        var tomador_dni_ce = document.getElementById('tomador_dni_ce') ;

        var asegurado_nombre_licitante = document.getElementById('asegurado_nombre_licitante');
        var asegurado_ruc = document.getElementById('asegurado_ruc');
        var asegurado_direccion = document.getElementById('asegurado_direccion');
        var asegurado_nombre_funcionario = document.getElementById('asegurado_nombre_funcionario');
        var asegurado_telefono = document.getElementById('asegurado_telefono');
        var asegurado_email = document.getElementById('asegurado_email');


        var obra_denominacion = document.getElementById('obra_denominacion');
        var obra_descripcion = document.getElementById('obra_descripcion');
        var obra_contratacion = document.getElementById('obra_contratacion');
        var obra_valor_ref = document.getElementById('obra_valor_ref');
        var obra_valor_adj = document.getElementById('obra_valor_adj');
        var obra_lugar = document.getElementById('obra_lugar');
        var obra_plazo = document.getElementById('obra_plazo');

 
        var poliza = document.getElementsByName( "poliza");
        var cobertura_dinero = document.getElementsByName("cobertura_dinero");
        var cobertura_fianza = document.getElementsByName("cobertura_fianza");
        var cobertura_vigencia_ini = document.getElementsByName("cobertura_vigencia_ini");
        var cobertura_vigencia_fin = document.getElementsByName("cobertura_vigencia_fin");

        var alerta_no_consorcio = document.getElementById("alertar_no_consorcio");
        
        var social_decla = document.getElementById("social_decla");
        var tiempo = document.getElementById("fecha_hoy");
        var enviar= document.getElementById("enviar");

        var decla5_entidad = document.getElementById("declaracion5_entidad");

        enviar.addEventListener("click",clickeaste);

        function clickeaste(){

            var sitio1  = document.querySelector('.nombre_deno'); 
            var mensaje1 = document.createTextNode( tomador_nombre.value);
             
            sitio1.appendChild(mensaje1);

            var sitio2  = document.querySelector('.tom_ruc'); 
            var mensaje2 = document.createTextNode( tomador_ruc.value);
             
            sitio2.appendChild(mensaje2);

            var sitio3  = document.querySelector('.tom_dni');
            var mensaje3 = document.createTextNode( tomador_dni_ce.value);
            
            sitio3.appendChild(mensaje3 );

            /** */

            var sitio4  = document.querySelector('.ase_nombre_licitante');
            var mensaje4 = document.createTextNode( asegurado_nombre_licitante.value);
             
            sitio4.appendChild(mensaje4);

            var sitio5  = document.querySelector('.ase_ruc');
            var mensaje5 = document.createTextNode( asegurado_ruc.value);
            
            sitio5.appendChild(mensaje5);

            var sitio6  = document.querySelector('.ase_direccion');
            var mensaje6 = document.createTextNode( asegurado_direccion.value);
            
            sitio6.appendChild(mensaje6);

            var sitio7  = document.querySelector('.ase_nombre_funcionario');
            var mensaje7 = document.createTextNode( asegurado_nombre_funcionario.value);
            
            sitio7.appendChild(mensaje7);

            var sitio8  = document.querySelector('.ase_telefono'); 
            var mensaje8 = document.createTextNode( asegurado_telefono.value);
            
            sitio8.appendChild(mensaje8);

            var sitio9  = document.querySelector('.ase_email');
            var mensaje9 = document.createTextNode( asegurado_email.value);
            
            sitio9.appendChild(mensaje9);
            /** */

            var sitio10  = document.querySelector('.obr_denominacion'); 
            var mensaje10 = document.createTextNode( obra_denominacion.value);
            
            sitio10.appendChild(mensaje10);

            var sitio11  = document.querySelector('.obr_descripcion');
            var mensaje11 = document.createTextNode( obra_descripcion.value);
            
            sitio11.appendChild(mensaje11);

            var sitio12  = document.querySelector('.obr_contratacion');
            var mensaje12 = document.createTextNode( obra_contratacion.value);
            
            sitio12.appendChild(mensaje12);

            var sitio13  = document.querySelector('.obr_valor_ref');
            var mensaje13 = document.createTextNode( obra_valor_ref.value);
            
            sitio13.appendChild(mensaje13);

            var sitio14  = document.querySelector('.obr_valor_adj');
            var mensaje14 = document.createTextNode( obra_valor_adj.value);
            
            sitio14.appendChild(mensaje14);

            var sitio15  = document.querySelector('.obr_lugar'); 
            var mensaje15 = document.createTextNode( obra_lugar.value); 

            sitio15.appendChild(mensaje15);

            var sitio16  = document.querySelector('.obr_plazo');
            var mensaje16 = document.createTextNode( obra_plazo.value);
            
            sitio16.appendChild(mensaje16);

            //** */
            var seleccionado=document.getElementsByName("servicio");
            var len = seleccionado.length; 
            for(var i=0;i<len;i++){ 
                if(seleccionado[i].checked){
                        // document.getElementById("proalq").innerText.replace =seleccionado[i].value;
                        var mensajex=document.createTextNode(seleccionado[i].value);
                        var puerta = document.querySelector('.proalq');
                        puerta.appendChild(mensajex);
                    }
            }

             
            //** */
            var sitio30 = document.querySelector(".consorcioo");
            var mensaje30 = document.createTextNode( alerta_no_consorcio.value);
            
            sitio30.appendChild(mensaje30); 

            var sitio31 = document.querySelector(".soc_decla");
            var mensaje31 = document.createTextNode( social_decla.value);
            
            sitio31.appendChild(mensaje31);   

  
           
            var values = [];
     
            $('#TableID input[class="chk"]:checked').each(function(){
                var row = $(this).closest("tr");
                values.push({ 
                eleccion : $(this).val(),
                especificacion : $(row).find("select").children("option:selected").val(),
                suma    : $(row).find("input[name=cobertura_suma]").val(),
                plazo       : $(row).find('input[name=cobertura_fianza]').val(), 
                vigencia_ini    : $(row).find("input[name=cobertura_vigencia_ini] ").val(),
                vigencia_fin    : $(row).find("input[name=cobertura_vigencia_fin] ").val() 
              
                });
             });
    
            
             
  
            var pol  = document.querySelector('.cober_poliza'); 
            var mensaje6_ = document.createTextNode( values[0].eleccion);
            
            pol.appendChild(mensaje6_);
        
            var moneda  = document.querySelector('.cober_moneda'); 
            var mensaje7_ = document.createTextNode( values[0].especificacion);
            
            moneda.appendChild(mensaje7_);
        
            var sumar  = document.querySelector('.cober_suma'); 
            var mensaje8_ = document.createTextNode( values[0].suma);
            
            sumar.appendChild(mensaje8_);
        
            var plaz  = document.querySelector('.cober_fianza'); 
            var mensaje9_ = document.createTextNode( values[0].plazo);
            
            plaz.appendChild(mensaje9_);
        
        
            var ende  = document.querySelector('.cober_vigencia'); 
            var mensaje11_ = document.createTextNode( values[0].vigencia_ini +"-"+ values[0].vigencia_ini);
            
            ende.appendChild(mensaje11_);
        
        
            var pol1  = document.querySelector('.cobertura_poliza1'); 
            var mensaje61_ = document.createTextNode( values[1].eleccion);
            
            pol1.appendChild(mensaje61_);

            var moneda1 = document.querySelector('.cober_moneda1'); 
            var mensaje71_ = document.createTextNode( values[1].especificacion);
            
            moneda1.appendChild(mensaje71_);
        
            var sumar1  = document.querySelector('.cober_suma1'); 
            var mensaje81_ = document.createTextNode( values[1].suma);
            
            sumar1.appendChild(mensaje81_);
        
            var plaz1  = document.querySelector('.cober_fianza1'); 
            var mensaje91_ = document.createTextNode( values[1].plazo);
            
            plaz1.appendChild(mensaje91_);
        
        
            var ende1  = document.querySelector('.cober_vigencia1'); 
            var mensaje111_ = document.createTextNode( values[1].vigencia_ini +"-"+ values[1].vigencia_fin);
            
            ende1.appendChild(mensaje111_);   
        
    

        
            
            var pol2  = document.querySelector('.cobertura_poliza2'); 
            var mensaje2_ = document.createTextNode( values[2].eleccion);
            
            pol2.appendChild(mensaje2_);
        
            var moneda2  = document.querySelector('.cober_moneda2'); 
            var mensaje72_ = document.createTextNode( values[2].especificacion);
            
            moneda2.appendChild(mensaje72_);
        
            var sumar2 = document.querySelector('.cober_suma2'); 
            var mensaje82_ = document.createTextNode( values[2].suma);
            
            sumar2.appendChild(mensaje82_);
        
            var plaz2  = document.querySelector('.cober_fianza2'); 
            var mensaje92_= document.createTextNode( values[2].plazo);
            
            plaz2.appendChild(mensaje92_);
         
        
            var ende2  = document.querySelector('.cober_vigencia2'); 
            var mensaje112_ = document.createTextNode( values[2].vigencia_ini +"-"+ values[2].vigencia_fin);
            
            ende2.appendChild(mensaje112_);
                    
            


        
    
            var pol3  = document.querySelector('.cobertura_poliza3'); 
            var mensaje63_ = document.createTextNode( values[3].eleccion);
            
            pol3.appendChild(mensaje63_);
        
            var moneda3 = document.querySelector('.cober_moneda3'); 
            var mensaje73_ = document.createTextNode( values[3].especificacion);
            
            moneda3.appendChild(mensaje73_);
        
            var sumar3  = document.querySelector('.cober_suma3'); 
            var mensaje83_ = document.createTextNode( values[3].suma);
            
            sumar3.appendChild(mensaje83_);
        
            var plaz3  = document.querySelector('.cober_fianza3'); 
            var mensaje93_ = document.createTextNode( values[3].plazo);
            
            plaz3.appendChild(mensaje93_);
         
        
            var ende3  = document.querySelector('.cober_vigencia3'); 
            var mensaje113_ = document.createTextNode( values[3].vigencia_ini +"-"+ values[3].vigencia_fin);
            -
            ende3.appendChild(mensaje113_);
        
        
        
    

    
        var pol4  = document.querySelector('.cobertura_poliza4'); 
        var mensaje64_ = document.createTextNode( values[4].eleccion);
        
        pol4.appendChild(mensaje64_);
    
        var moneda4 = document.querySelector('.cober_moneda4'); 
        var mensaje74_ = document.createTextNode( values[4].especificacion);
        
        moneda4.appendChild(mensaje74_);
    
        var sumar4  = document.querySelector('.cober_suma4'); 
        var mensaje84_ = document.createTextNode( values[4].suma);
        
        sumar4.appendChild(mensaje84_);
    
        var plaz4  = document.querySelector('.cober_fianza4'); 
        var mensaje94_ = document.createTextNode( values[4].plazo);
        
        plaz4.appendChild(mensaje94_);
     
 
        var ende4  = document.querySelector('.cober_vigencia4'); 
        var mensaje114_ = document.createTextNode( values[4].vigencia_ini +"-"+ values[4].vigencia_fin);
        
        ende4.appendChild(mensaje114_);
    
 
     }
     document.querySelector("#print").addEventListener("click", function() {
	 window.print();
});

});
})();
$(function(){
         
    var fec=new Date; 
    var dia=fec.getDate(); 
    if (dia<10) dia='0'+dia; 
    var  mes=fec.getMonth()+1; 
    if (mes<10) mes='0'+mes; 
    var  anio=fec.getFullYear(); 
    var  fecha=dia+'/'+mes+'/'+anio;  
    console.log(fecha);
    $('#fecha_hoy').append(fecha); 
     

    
    $(".boton_5").click(function(){ 


        
        var date1 = new Date($('#declaracion5_fec_ini').val()); 
        var day1 = date1.getDate()+1; 
        var month1= date1.getMonth() + 1; 
        var year = date1.getFullYear(); 
        var fechatotal1= day1+ "/"+month1+"/"+year; 

        var date2 = new Date($('#declaracion5_fec_fin').val()); 
        var day2 = date2.getDate()+1; 
        var month2= date2.getMonth() + 1; 
        var year2 = date2.getFullYear(); 
        var fechatotal2= day2+ "/"+month2+"/"+year2; 

        var date3 = new Date($('#declaracion5_fec_re').val()); 
        var day3 = date3.getDate()+1; 
        var month3= date3.getMonth() + 1; 
        var year3 = date3.getFullYear(); 
        var fechatotal3= day3+ "/"+month3+"/"+year3; 
 

          
        var txt=$('input:text[name=declaracion5_entidad]').val();
        var txt1=$('input:text[name=declaracion5_objeto]').val();
        var txt2=$('input:text[name=declaracion5_monto]').val();
        var txt3=$('input:text[name=declaracion5_plazo]').val();   
        var txt7=$('input:text[name=declaracion5_fa_co]').val();

        if(txt.length==0 ||txt1.length==0 ||txt2.length==0||txt3.length==0 ){
            alert('campo(s) necesarios vacios');
            return false;
        }
        var fila5="<tr> <td >"+txt+"</td><td >"+txt1+"</td><td >"+txt2+"</td><td >"+txt3+"</td><td >"+fechatotal1+"</td><td >"+fechatotal2+"</td><td >"+fechatotal3+"</td><td >"+txt7+"</td></tr>";

        $('.tfinal5').append(fila5);
        console.log(fila5); 
        return false;
    });

    $(".boton_eje").click(function(){ 

        var date4 = new Date($('#declaracion_eje_fec_ini').val()); 
        var day4 = date4.getDate()+1;
        var month4= date4.getMonth() + 1; 
        var year4 = date4.getFullYear(); 
        var fechatotal4= day4+ "/"+month4+"/"+year4; 

        var date5 = new Date($('#declaracion_eje_fec_fin').val()); 
        var day5 = date5.getDate()+1; 
        var month5= date5.getMonth() + 1; 
        var year5 = date5.getFullYear(); 
        var fechatotal5= day5+ "/"+month5+"/"+year5; 

        var date6 = new Date($('#declaracion_eje_fec_re').val()); 
        var day6 = date6.getDate()+1; 
        var month6= date6.getMonth() + 1; 
        var year6 = date6.getFullYear(); 
        var fechatotal6= day6+ "/"+month6+"/"+year6; 

        var txto=$('input:text[name=declaracion_eje_entidad]').val();
        var txto1=$('input:text[name=declaracion_eje_objeto]').val();
        var txto2=$('input:text[name=declaracion_eje_monto]').val();
        var txto3=$('input:text[name=declaracion_eje_plazo]').val();
        var txto7=$('input:text[name=declaracion_eje_fa_co]').val();

        if(txto.length==0 ||txto1.length==0 ||txto2.length==0||txto3.length==0){
            alert('campo(s) necesarios vacios');
            return false;
        }

        var fila_eje="<tr> <td >"+txto+"</td><td >"+txto1+"</td><td >"+txto2+"</td><td >"+txto3+"</td><td >"+fechatotal4+"</td><td >"+fechatotal5+"</td><td >"+fechatotal6+"</td><td >"+txto7+"</td></tr>";
        

        $('.tfinal_eje').append(fila_eje); 
        return false;
    });
    $(".boton_18").click(function(){


        var date7 = new Date($('#declaracion18_fec_ini').val()); 
        var day7 = date7.getDate()+1;
        var month7= date7.getMonth() + 1; 
        var year7 = date7.getFullYear(); 
        var fechatotal7= day7+ "/"+month7+"/"+year7; 

        var date8= new Date($('#declaracion18_fec_fin').val()); 
        var day8 = date8.getDate()+1; 
        var month8= date8.getMonth() + 1; 
        var year8 = date8.getFullYear(); 
        var fechatotal8= day8+ "/"+month8+"/"+year8; 

        var date9 = new Date($('#declaracion18_fec_re').val()); 
        var day9 = date9.getDate()+1; 
        var month9= date9.getMonth() + 1; 
        var year9 = date9.getFullYear(); 
        var fechatotal9= day9+ "/"+month9+"/"+year9; 

        var txtx=$('input:text[name=declaracion18_entidad]').val();
        var txtx1=$('input:text[name=declaracion18_objeto]').val();
        var txtx2=$('input:text[name=declaracion18_monto]').val();
        var txtx3=$('input:text[name=declaracion18_plazo]').val(); 
        var txtx7=$('input:text[name=declaracion18_fa_co]').val();

        if(txtx.length==0 ||txtx1.length==0 ||txtx2.length==0||txtx3.length==0){
            alert('campo(s) necesarios vacios');
            return false;
        }

        var fila18="<tr> <td >"+txtx+"</td><td >"+txtx1+"</td><td >"+txtx2+"</td><td >"+txtx3+"</td><td >"+fechatotal7+"</td><td >"+fechatotal8+"</td><td >"+fechatotal9+"</td><td >"+txtx7+"</td></tr>";

         
        $('.tfinal18').append(fila18);
        return false;
        
         
    });


 

});

     