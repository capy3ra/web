const container = document.querySelector(".data-container"); 

function generatebars(num = 20) { 
	
  for (let i = 0; i < num; i += 1) { 
    const value = Math.floor(Math.random() * 100) + 1; 
    const bar = document.createElement("div"); 
    bar.classList.add("bar"); 
    bar.style.height = `${value * 3}px`; 
    bar.style.transform = `translateX(${i * 30}px)`; 
    
    const barLabel = document.createElement("label"); 
    // barLabel.classList.add("bar_id");
    barLabel.innerHTML = value; 
    bar.appendChild(barLabel); 
    container.appendChild(bar); 
  } 
} 

async function SelectionSort(delay = 600) { 
  let bars = document.querySelectorAll(".bar"); 
  var min_idx = 0; 
  for (var i = 0; i < bars.length; i += 1) { 
    min_idx = i; 
    //Số được chọn để so sánh, gọi là i
    bars[i].style.backgroundColor = "rgb(113 121 175)"; 
    for (var j = i + 1; j < bars.length; j += 1) { 
      bars[j].style.backgroundColor = "red"; 
      
    // Hoãn thực thi code trong 0.6s
    await new Promise((resolve) => 
      setTimeout(() => { 
      resolve(); 
      }, 600) 
    ); 

    var val1 = parseInt(bars[j].childNodes[0].innerHTML); 
    var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML); 
    if (val1 < val2) { 
      if (min_idx !== i) { 
        bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)"; 
      } 
      min_idx = j; 
    } else { 
      bars[j].style.backgroundColor = " rgb(24, 190, 255)"; 
      } 
    } 

    var temp1 = bars[min_idx].style.height; 
    var temp2 = bars[min_idx].childNodes[0].innerText; 
    bars[min_idx].style.height = bars[i].style.height; 
    bars[i].style.height = temp1; 
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText; 
    bars[i].childNodes[0].innerText = temp2; 
     
    await new Promise((resolve) => 
    setTimeout(() => { 
      resolve(); 
    }, 600) 
    ); 

    bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)"; 
    bars[i].style.backgroundColor = " rgb(49, 226, 13)"; 
  }  
} 

async function InsertionSort(delay = 600) { 
  let bars = document.querySelectorAll(".bar"); 
  bars[0].style.backgroundColor = " rgb(49, 226, 13)"; 
  for (var i = 1; i < bars.length; i += 1) { 
    var j = i - 1; 
    var key = 
    parseInt(bars[i].childNodes[0].innerHTML); 
    var height = bars[i].style.height; 
    bars[i].style.backgroundColor = "rgb(49, 226, 13)"; 
    await new Promise((resolve) => 
    setTimeout(() => { 
    resolve(); 
    }, 600) 
  ); 
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) { 
    bars[j].style.backgroundColor = "darkblue"; 
    bars[j + 1].style.height = bars[j].style.height; 
    bars[j + 1].childNodes[0].innerText = 
    bars[j].childNodes[0].innerText; 
    j = j - 1; 
  
    await new Promise((resolve) => 
      setTimeout(() => { 
      resolve(); 
      }, 600) 
    ); 
      
    for(var k=i;k>=0;k--){ 
      bars[k].style.backgroundColor = "lightgreen"; 
    } 
    } 
  
    bars[j + 1].style.height = height; 
    bars[j + 1].childNodes[0].innerHTML = key; 
    
    await new Promise((resolve) => 
    setTimeout(() => { 
      resolve(); 
    }, 600) 
    ); 
    
    bars[i].style.backgroundColor = " lightgreen"; 
  }  
}

async function BubbleSort(delay = 600) {
  let bars = document.querySelectorAll(".bar");
  let n = bars.length;

  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          bars[j].style.backgroundColor = "red";
          bars[j + 1].style.backgroundColor = "red";

          await new Promise((resolve) => setTimeout(resolve, delay));

          let val1 = parseInt(bars[j].childNodes[0].innerHTML);
          let val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

          if (val1 > val2) {
              let tempHeight = bars[j].style.height;
              let tempText = bars[j].childNodes[0].innerText;

              bars[j].style.height = bars[j + 1].style.height;
              bars[j].childNodes[0].innerText = bars[j + 1].childNodes[0].innerText;

              bars[j + 1].style.height = tempHeight;
              bars[j + 1].childNodes[0].innerText = tempText;
          }

          bars[j].style.backgroundColor = "rgb(24, 190, 255)";
          bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
      }
      bars[n - i - 1].style.backgroundColor = "rgb(49, 226, 13)";
  }
}

generatebars(); 

function generate() { 
  window.location.reload(); 
}