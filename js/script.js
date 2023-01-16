/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe


BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede */

/*----------------------------------------------------------------------------------------*/

const TeamMembers = 
[
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
];

// PRIMA SOLUZIONE IN CUI NON RIESCO A CREARE DIVERSE RIGHE NELLA TABELLA

// const TeamMembersInfo = document.getElementById('team-members-info');
// const memberName = document.getElementById('member-name');
// const memberRole = document.getElementById('member-role');
// const memberImage = document.getElementById('member-image');

// for (let i = 0; i < TeamMembers.length; i++) {

//     console.log(
//     'Nome:', TeamMembers[i].name, '-',
//     'Ruolo:', TeamMembers[i].role, '-', 
//     'Immagine:', TeamMembers[i].image
//     );
    
//     const newMemberName = document.createElement('tr');
//     const newMemberRole = document.createElement('tr');
//     const newMemberImage = document.createElement('tr');

//     newMemberName.innerHTML = TeamMembers[i].name;
//     newMemberRole.innerHTML = TeamMembers[i].role;
//     newMemberImage.innerHTML = TeamMembers[i].image;

//     memberName.append(newMemberName);
//     memberRole.append(newMemberRole);
//     memberImage.append(newMemberImage);
    
// }

// SECONDA SOLUZIONE MOLTO LUNGA PER DIVIDIRE TUTTE LE RIGHE DELA TABELLA

const memberName0 = document.getElementsByClassName('member-name')[0];
const newMemberName0 = document.createElement('div');
newMemberName0.innerHTML = TeamMembers[0].name;
memberName0.append(newMemberName0);

const memberRole0 = document.getElementsByClassName('member-role')[0];
const newMemberRole0 = document.createElement('div');
newMemberRole0.innerHTML = TeamMembers[0].role;
memberRole0.append(newMemberRole0);

const memberImage0 = document.getElementsByClassName('member-image')[0];
const newMemberImage0 = document.createElement('div');
newMemberImage0.innerHTML = TeamMembers[0].image;
memberImage0.append(newMemberImage0);
// -------------------------FINE PRIMO MEMBRO----------------------------//


const memberName1 = document.getElementsByClassName('member-name')[1];
const newMemberName1 = document.createElement('div');
newMemberName1.innerHTML = TeamMembers[1].name;
memberName1.append(newMemberName1);

const memberRole1 = document.getElementsByClassName('member-role')[1];
const newMemberRole1 = document.createElement('div');
newMemberRole1.innerHTML = TeamMembers[1].role;
memberRole1.append(newMemberRole1);

const memberImage1 = document.getElementsByClassName('member-image')[1];
const newMemberImage1 = document.createElement('div');
newMemberImage1.innerHTML = TeamMembers[1].image;
memberImage1.append(newMemberImage1);
// -------------------------FINE SECONDO MEMBRO----------------------------//

const memberName2 = document.getElementsByClassName('member-name')[2];
const newMemberName2 = document.createElement('div');
newMemberName2.innerHTML = TeamMembers[2].name;
memberName2.append(newMemberName2);

const memberRole2 = document.getElementsByClassName('member-role')[2];
const newMemberRole2 = document.createElement('div');
newMemberRole2.innerHTML = TeamMembers[2].role;
memberRole2.append(newMemberRole2);

const memberImage2 = document.getElementsByClassName('member-image')[2];
const newMemberImage2 = document.createElement('div');
newMemberImage2.innerHTML = TeamMembers[2].image;
memberImage2.append(newMemberImage2);
// -------------------------FINE TERZO MEMBRO----------------------------//

const memberName3 = document.getElementsByClassName('member-name')[3];
const newMemberName3 = document.createElement('div');
newMemberName3.innerHTML = TeamMembers[3].name;
memberName3.append(newMemberName3);

const memberRole3 = document.getElementsByClassName('member-role')[3];
const newMemberRole3 = document.createElement('div');
newMemberRole3.innerHTML = TeamMembers[3].role;
memberRole3.append(newMemberRole3);

const memberImage3 = document.getElementsByClassName('member-image')[3];
const newMemberImage3 = document.createElement('div');
newMemberImage3.innerHTML = TeamMembers[3].image;
memberImage3.append(newMemberImage3);
// -------------------------FINE QUARTO MEMBRO----------------------------//

const memberName4 = document.getElementsByClassName('member-name')[4];
const newMemberName4 = document.createElement('div');
newMemberName4.innerHTML = TeamMembers[4].name;
memberName4.append(newMemberName4);

const memberRole4 = document.getElementsByClassName('member-role')[4];
const newMemberRole4 = document.createElement('div');
newMemberRole4.innerHTML = TeamMembers[4].role;
memberRole4.append(newMemberRole4);

const memberImage4 = document.getElementsByClassName('member-image')[4];
const newMemberImage4 = document.createElement('div');
newMemberImage4.innerHTML = TeamMembers[4].image;
memberImage4.append(newMemberImage4);
// -------------------------FINE QUINTO MEMBRO----------------------------//

const memberName5 = document.getElementsByClassName('member-name')[5];
const newMemberName5 = document.createElement('div');
newMemberName5.innerHTML = TeamMembers[5].name;
memberName5.append(newMemberName5);

const memberRole5 = document.getElementsByClassName('member-role')[5];
const newMemberRole5 = document.createElement('div');
newMemberRole5.innerHTML = TeamMembers[5].role;
memberRole5.append(newMemberRole5);

const memberImage5 = document.getElementsByClassName('member-image')[5];
const newMemberImage5 = document.createElement('div');
newMemberImage5.innerHTML = TeamMembers[5].image;
memberImage5.append(newMemberImage5);
// -------------------------FINE SESTO MEMBRO----------------------------//
