const roles=["Python Engineer","Django Backend Expert","Cybersecurity Specialist"];
let i=0,j=0;
function type(){
 if(i>=roles.length)i=0;
 const text=roles[i].slice(0,++j);
 document.querySelector('.typing').textContent=text;
 if(text.length===roles[i].length){i++;j=0;setTimeout(type,1000)}
 else setTimeout(type,70);
}
type();

function scrollToSection(id){
 document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

const projects=[
 {title:"Snort Automation Tool",desc:"Security rule automation system"},
 {title:"Django REST API",desc:"Scalable backend API"},
 {title:"Cyber Monitor",desc:"Real-time threat detection"}
];
const container=document.getElementById('project-container');
projects.forEach(p=>{
 const div=document.createElement('div');
 div.className='card';
 div.innerHTML=`<h3>${p.title}</h3><p>${p.desc}</p>`;
 container.appendChild(div);
});

document.getElementById('contact-form').addEventListener('submit',e=>{
 e.preventDefault();
 alert('Message Sent!');
});
