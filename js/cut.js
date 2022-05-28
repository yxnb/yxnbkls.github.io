aa1=0
aa2=0
aa3=0
aa4=0
aa5=0
aa6=0
aa7=0
			function ab(){
				var a=document.getElementById("c1").value;
				var b=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
				var c=document.getElementById("d1");
				var b1=document.getElementById('b1');
				if(b.test(a) && a.length>3 && a.length<9){
					b1.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa1=1;
				}
				else{
					b1.className="wrong"
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa1=0;
				}
			}
			function aba(){
				var a=document.getElementById("c1").value;
				var b=/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
				var c=document.getElementById("d1");
				var b1=document.getElementById('b1');
				if(b.test(a) && a.length>3 && a.length<9){
					b1.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa1=1;
				}
				else if(a.length==0){
					b1.className="wrong";
					c.style.transform="translateY(0px)";
					c.style.color=" #554e45b2";
					aa1=0;
				}
				else{
					b1.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa1=0;
				}
			}
			function ab1(){
				var a=document.getElementById("c2").value;
				var b=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
				var c=document.getElementById("d2");
				var b2=document.getElementById('b2');
				if (b.test(a)){
					b2.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa2=1;
				}
				else{
					b2.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa2=0;
				}
			}
			function ab1a(){
				var a=document.getElementById("c2").value;
				var b=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
				var c=document.getElementById("d2");
				var b2=document.getElementById('b2');
				if (b.test(a)){
					b2.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa2=1;
				}
				else if(a.length==0){
					b2.className="wrong";
					c.style.transform="translateY(0px)";
					c.style.color=" #554e45b2";
					aa2=0;
				}
				else{
					b2.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa2=0;
				}
			}
			function ab2(){
				var a=document.getElementById("c3").value;
				var c=document.getElementById("d3");
				var b3=document.getElementById('b3');
				var b=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
				if (b.test(a)){
					b3.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa3=1;
				}
				else{
					b3.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa3=0;
				}
			}
			function ab2a(){
				var a=document.getElementById("c3").value;
				var c=document.getElementById("d3");
				var b3=document.getElementById('b3');
				var b=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
				if (b.test(a)){
					b3.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa3=1;
				}
				else if(a.length==0){
					b3.className="wrong";
					c.style.transform="translateY(0px)";
					c.style.color=" #554e45b2";
					aa3=0;
				}
				else{
					b3.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa3=0;
				}
			}
			function ab3(){
				var a=document.getElementById("c4").value;
				var c=document.getElementById("d4");
				var b4=document.getElementById('b4');
				var b=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				if (b.test(a)){
					b4.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa4=1;
				}
				else{
					b4.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa4=0;
				}
			}
			function ab3a(){
				var a=document.getElementById("c4").value;
				var c=document.getElementById("d4");
				var b=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				var b4=document.getElementById('b4');
				if (b.test(a)){
					b4.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa4=1;
				}
				else if(a.length==0){
					b4.className="wrong";
					c.style.transform="translateY(0px)";
					c.style.color=" #554e45b2";
					aa4=0;
				}
				else{
					b4.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa4=0;
				}
			}
			function ab4(){
				var a=document.getElementById("c5").value;
				var b=/^[a-zA-Z]\w{5,17}$/;
				var c=document.getElementById("d5");
				var b5=document.getElementById('b5');
				if (b.test(a)){
					b5.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa5=1;
				}
				else{
					b5.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa5=0;
				}
			}
			function ab4a(){
				var a=document.getElementById("c5").value;
				var b=/^[a-zA-Z]\w{5,17}$/;
				var c=document.getElementById("d5");
				var b5=document.getElementById('b5');
				if (b.test(a)){
					b5.className="right1"
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa5=1;
				}
				else if(a.length==0){
					b5.className="wrong";
					c.style.transform="translateY(0px)";
					c.style.color=" #554e45b2";
					aa5=0;
				}
				else{
					b5.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa5=0;
				}
			}
			function ab5(){
				var a=document.getElementById("c6").value;
				var b=document.getElementById("c5").value;
				var c=document.getElementById("d6");
				var b6=document.getElementById('b6');
				if (a==b && !a.length==""){
					b6.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa6=1;
				}
				else{
					b6.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa6=0;
				}
			}
			function ab5a(){
				var a=document.getElementById("c6").value;
				var b=document.getElementById("c5").value;
				var c=document.getElementById("d6");
				var b6=document.getElementById('b6');
				if (a==b && !a.length==""){
					b6.className="right1";
					c.style.transform="translateY(-20px)";
					c.style.color="#00ff7f";
					aa6=1;
				}
				else if(a.length==0){
					b6.className="wrong";
					c.style.transform="translateY(0px)";
					c.style.color=" #554e45b2";
					aa6=0;
				}
				else{
					b6.className="wrong";
					c.style.transform="translateY(-20px)";
					c.style.color="#122644";
					aa6=0;
				}
			}
			function b1(){
				var b =document.getElementById('nb');
				var c =document.getElementById('xy');
				b.className='nb-right';
				c.className='xy-right';
			}
			function a(){
				var a =document.getElementById('check');
				var b =document.getElementById('nb');
				var c =document.getElementById('xy');
				ab();
				ab1();
				ab2();
				ab3();
				ab4();
				ab5();
				if(aa1==1 && aa2==1 && aa3==1 && aa4==1 && aa5==1 && aa6==1 && a.checked==true){
					 window.location.href="https://gitee.com/yxnbkls/recommend/tree/master/%E6%A3%80%E6%B5%8B";
					 alert('注册成功');
				}
				else{
					b.className='nb-wrong';
					c.className='xy-wrong';
					setTimeout('b1()',300);
				}
			}
			function bbc(){
				document.getElementById("box").style.animation="move21 2s";
			}
			function c(){
				var a=document.getElementById("d1");
				var b=document.getElementById("c1").value;
				if (b==""){
					a.style.transform="translateY(-20px)";
					a.style.color="#122644";
				}
			}
			function c1(){
				var a=document.getElementById("d2");
				var b=document.getElementById("c2").value;
				if (b==""){
					a.style.transform="translateY(-20px)";
					a.style.color="#122644";
				}
			}
			function c2(){
				var a=document.getElementById("d3");
				var b=document.getElementById("c3").value;
				if (b==""){
					a.style.transform="translateY(-20px)";
					a.style.color="#122644";
				}
			}
			function c3(){
				var a=document.getElementById("d4");
				var b=document.getElementById("c4").value;
				if (b==""){
					a.style.transform="translateY(-20px)";
					a.style.color="#122644";
				}
			}
			function c4(){
				var a=document.getElementById("d5");
				var b=document.getElementById("c5").value;
				if (b==""){
					a.style.transform="translateY(-20px)";
					a.style.color="#122644";
				}
			}
			function c5(){
				var a=document.getElementById("d6");
				var b=document.getElementById("c6").value;
				if (b==""){
					a.style.transform="translateY(-20px)";
					a.style.color="#122644";
				}
			}
			function a12(){
			    var a=document.getElementById('a12').value;
			    var b=document.getElementById('c12');
				var c=document.getElementById('box');
			    b.innerHTML=a;
				c.style.backdropFilter='blur('+a+'px)';
			}
			function a13(){
				document.getElementById('a12').value=8;
				
			}
			setTimeout('a13()',10);
			setTimeout('a12()',20);
			function a14(){
			    var a=document.getElementById('a13').value;
			    var b=document.getElementById('c13');
				var c=document.getElementById('box');
			    b.innerHTML=a;
			}
			function a15(){
				document.getElementById('a13').value=0;
			}
			setTimeout('a15()',10);
			setTimeout('a14()',20);
			timea=0
			function filter(){
				var a=document.getElementById('loading');
				timea =timea+1;
				a.style.backdropFilter='';
			}
			function time(){
				for (var i=0;i<30;i++)
				{ 
					setTimeout('filter',20);
				}
			}
			