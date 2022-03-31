//Get all the elements

//Fetch national news content
async function getNationalNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=national"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-national");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getNationalNews();

//Fetch business news content
async function getBusinessNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=business"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-business");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getBusinessNews();

//Fetch business news content
async function getSportsNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=sports"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-sports");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getSportsNews();

//Fetch world news content
async function getWorldNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=world"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-world");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getWorldNews();

//Fetch politics news content
async function getPoliticsNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=politics"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-politics");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getPoliticsNews();

//Fetch technology news content
async function getTechnologyNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=technology"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-technology");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getTechnologyNews();

//Fetch startup news content
async function getStartupNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=startup"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-startup");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getStartupNews();

//Fetch entertainment news content
async function getEntertainmentNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=entertainment"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-entertainment");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getEntertainmentNews();

//Fetch miscellaneous news content
async function getMiscellaneousNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=miscellaneous"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-miscellaneous");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getMiscellaneousNews();

//Fetch hatke news content
async function getHatkeNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=hatke"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-hatke");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getHatkeNews();

//Fetch science news content
async function getScienceNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=science"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-science");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getScienceNews();

//Fetch automobile news content
async function getAutomobileNews() {
  let fetchData = await fetch(
    "https://inshortsapi.vercel.app/news?category=automobile"
  );
  let responseData = await fetchData.json();
  let data = await responseData.data;
  for (let i = 0; i < data.length; i++) {
    const nationalNews = document.getElementById("news-automobile");
    const nationalDiv = document.createElement("div");
    nationalDiv.setAttribute("class", "col-lg-3 g-3");
    nationalDiv.innerHTML = `
  
    
    <img src=${data[i].imageUrl} style="width:100%; height:15rem" class="rounded border border-1"/>
    <h4 class="pt-3">${data[i].title}</h4>
    <p class="pt-3 para-ellipsis">${data[i].content}</p>
    <a href=${data[i].readMoreUrl} class="readmore-link" target="_blank">Read more</a>
    `;
    nationalNews.append(nationalDiv);
  }
}
getAutomobileNews();
