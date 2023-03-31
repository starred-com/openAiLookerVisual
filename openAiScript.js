
var svg = d3.select("#vis").append("svg").style('position', 'fixed')
.attr('viewBox', '-10 -10 335 216').attr('preserveAspectRatio', 'xMidYMid meet');

const body = JSON.stringify({ 
    prompt: "What is the tempreture today and tomorrow", 
    max_tokens: 100, 
    model: 'text-davinci-003', 
});
const apiKey = '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'
var font = `"Google Sans", "Noto Sans", "Noto Sans JP", "Noto Sans CJK KR", "Noto Sans Arabic UI", "Noto Sans Devanagari UI", "Noto Sans Hebrew", "Noto Sans Thai UI", Helvetica, Arial, sans-serif`
        

async function openAiData() {
  let apiOutput
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey,
    }, body: body,
  });
  const result = await response.json();
  apiOutput = result['choices'][0]['text'];
  return apiOutput;
}

const printApiText = async () => {
  const data = await openAiData();

  svg.append("text")
    .attr('dx', 10)
    .attr('dy', 30)
    .attr('fill', "#333")
    .style('font-size', '0.2rem')
    .style('font-family', font)
    .text(data)
};

printApiText()