function tombol() {
    const title = document.getElementById('title'); 
    title.innerHTML = 'Leader Biography'; 
    const bio = document.getElementById('bio');
    bio.innerHTML = '<body style="background-color:brown"> <div class="Nama"> <img src="https://seeklogo.com/images/P/peaky-blinders-logo-47E0448C0B-seeklogo.com.png" alt="Logo" /> <h1>PEAKY BLINDERS</h1></div><div id="main"> <div class="biobox"> <img src="https://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Peaky-Blinders-Tommy-shelby-age-2691820.jpg" alt="Thomas Shelby"><h3>Thomas Shelby Biography</h3> <p>Thomas Michael Shelby was born in Birmingham, England, around 1890 to an Irish Traveller and Romani family and grew up in the Small Heath neighbourhood of Birmingham. He dated Greta Jurossi, a woman of Italian descent during his 20s, but she died of tuberculosis. His experiences as a sergeant major during the First World War have resulted in him suffering from PTSD and it isimplied he returned from it as a changed man.Thomas served in World War I with the rank of Sergeant Major and was decorated for bravery (Though he dumped them in a canal after returning from the war). His experiences in World War I left him disillusioned and beset with ongoing nightmares, and he becomes determined to move his family up in the world so that the powers who had always mistreated them could no longer touch them.After the vendetta with the New York Mafia, and during the year of the Wall Street Crash, Thomas Shelby became a Member of Parliament as a member of the Labour Party, while lending the chair of the legal business to his older brother, Arthur Shelby.</p></div></div><div class="bawahbio"><a>&copy; Andika Rizki Ramadhan</a></div></body>';
    const Bio = document.createElement('p'); 
    const BodyBio = document.createTextNode('Andika Rizki Ramadhan - 120140002'); 
    Bio.appendChild(BodyBio); 
    const cetak = document.getElementById('body'); 
    cetak.appendChild(Bio); 
}
