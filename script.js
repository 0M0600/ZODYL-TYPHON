const techniques=[
{name:"1. CLAN UCHIHA - SHARINGAN",letter:"{NUMERO}, mon Sharingan ne voit que toi. Mon coeur brûle comme le feu Uchiha. Écris-moi, mon bb, je t'attends."},
{name:"2. CLAN UZUMAKI - SCEAUX",letter:"{NUMERO}, comme un Uzumaki je ne lâche jamais. Mon amour pour toi est scellé pour toujours. Réponds-moi."},
{name:"3. CLAN HYUGA - BYAKUGAN",letter:"Bb {NUMERO}, mon Byakugan voit à travers tout, sauf sans toi je suis aveugle. Tu es ma vision, viens me parler."},
{name:"4. CLAN SENJU - MOKUTON",letter:"{NUMERO}, comme Senju, mon amour grandit comme une forêt, fort et éternel. Tu es ma vitalité."},
{name:"5. CLAN NARA - OMBRE",letter:"Mon {NUMERO}, comme Nara, mon ombre te suit partout. Même dans l'ombre, c'est toi que je choisis. Écris-moi."}
];
function toggleMenu(){var m=document.getElementById('menu');m.style.display=m.style.display==='block'?'none':'block';}
function setBg(type){var bg=document.getElementById('bgInside');bg.className='';bg.innerHTML='<div class="stars"></div><div class="planet p1"></div><div class="planet p2"></div><div class="planet p3"></div><div class="planet p4"></div><div class="planet p5"></div><div class="nebula"></div>';bg.classList.add(type);toggleMenu();}
function enterSite(){document.getElementById('intro').style.display='none';document.getElementById('main').style.display='block';document.getElementById('bgInside').style.display='block';document.getElementById('menuBtn').style.display='block';window.scrollTo(0,0);}
function render(){var grid=document.getElementById('grid');grid.innerHTML='';techniques.forEach(function(t,i){var c=document.createElement('div');c.className='card';c.innerHTML='<h3>'+t.name+'</h3><textarea id="letter-'+i+'">'+t.letter+'</textarea><button class="btn" onclick="copyText('+i+')">📋 COPIER LE TEXTE</button><button class="btn" style="background:#000;color:#fff;border:1px solid #fff" onclick="sendMail('+i+')">📧 ENVOYER</button>';grid.appendChild(c);});}
function updateAll(){var num=document.getElementById('phoneNumber').value.trim();if(!num)num='{NUMERO}';techniques.forEach(function(t,i){document.getElementById('letter-'+i).value=t.letter.replace(/{NUMERO}/g,num);});}
function copyText(i){navigator.clipboard.writeText(document.getElementById('letter-'+i).value).then(function(){alert('Copié !');});}
function sendMail(i){
var txt=document.getElementById('letter-'+i).value;
var subject=encodeURIComponent(techniques[i].name);
var body=encodeURIComponent(txt);
window.location.href="mailto:support@whatsapp.com,android@support.whatsapp.com,iphone@support.whatsapp.com,wp@support.whatsapp.com,webclient@support.whatsapp.com,smb@support.whatsapp.com,businesscomplaints@support.whatsapp.com,accessibility@support.whatsapp.com,privacy@whatsapp.com,kaios@support.whatsapp.com,smb_web@support.whatsapp.com,android_web@support.whatsapp.com,iphone_web@support.whatsapp.com,abuse@support.whatsapp.com?subject="+subject+"&body="+body;
}
render();

