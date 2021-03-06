//Variables

var spacings = [
	//A
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//B
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0],
	//c
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//D
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//E
	[0,0,0,0,0,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//F
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//G
	[0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//H
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//I
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-100,0,0,0,0],
	//J
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//K
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//L
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//M
	[0,175,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//N
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0],
	//O
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//P
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//Q
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//R
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//S
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//T
	[0,0,0,0,0,0,0,0,-40,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//U
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0],
	//V
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//W
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//X
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//Y
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	//Z
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//Functionallity
(function(d, w, undefined){
	var spacing = {
		//Variable
		data: {},

		//Initialisation
		init: function(){
			console.log("--- Init Stuff ---");

			console.log("-- Headlines --");
			this.data.headlines = this.setHeadlines();
			console.log(this.data.headlines);

			console.log("-- Pairs --");
			this.setPairs();

			console.log("-- Parsing to HTML --");
			this.renderHTML();

			console.log(this.data);

			return this;
		},

		//Methods
		setHeadlines: function(){
			var h1 = d.getElementsByTagName("h1"),
				h2 = d.getElementsByTagName("h2"),
				h3 = d.getElementsByTagName("h3"),
				h4 = d.getElementsByTagName("h4"),
				h5 = d.getElementsByTagName("h5"),
				h6 = d.getElementsByTagName("h6"),
				headlines = [h1, h2, h3, h4, h5, h6],
				data = [];

			for (var i = 0; i < headlines.length; i++) {
				for (var j = 0; j < headlines[i].length; j++) {
					console.log(headlines[i][j]);
					var text = headlines[i][j].innerText;
					if(text === undefined) {text = headlines[i][j].textContent;}
					data.push({
											headline: headlines[i][j],
											hierarchy: (i+1),
											text: text
										});
				}
			}
			return data;
		},

		setPairs: function(){
			if(this.data.headlines === undefined) {return false;}

			for (var i = 0; i < this.data.headlines.length; i++) {
				var data = this.data.headlines[i],
					text = this.data.headlines[i].text,
					pairs = [];
				for (var j = 0; j < text.length-1; j++) {
					var firstletter = text[j],
						secondletter = text[j+1],
						firstnum = letters.indexOf(firstletter),
						secondnum = letters.indexOf(secondletter);

					pairs.push({pair: firstletter+secondletter,
											firstnum: firstnum,
											secondnum: secondnum,
											spacing: spacings[firstnum][secondnum]});
				}
				this.data.headlines[i].pairs = pairs;
				console.log(data);
			}
		},

		renderHTML: function(){
			if(this.data.headlines[0].pairs === undefined){return false;}

			//Cicle through Data
			var headlines = this.data.headlines;
			for (var i = 0; i < headlines.length; i++) {
				var headline = headlines[i],
					spans = [];

				for (var j = 0; j < headline.pairs.length; j++) {
					//Generate Spans
					var pair = headline.pairs[j],
						span = d.createElement("span");

					//Spacing 1/1000 like in InDesign
					var spacing = pair.spacing/1000;

					span.innerText = pair.pair[0];
					span.style.marginRight = spacing+"em";
					spans.push(span);
				}

				//Add last Letter
				var last = d.createElement("span");
				last.innerText = headline.pairs[(headline.pairs.length-1)].pair[1];
				spans.push(last);

				//Change old to new Headline
				headline.headline.innerText = "";
				for (var k = 0; k < spans.length; k++) {
					headline.headline.appendChild(spans[k]);
				}

				console.log(headline);
			}
		},
		visual: function(){
			var table = d.createElement("table");
			for (var i = -1; i < spacings.length; i++) {
				var tr = d.createElement("tr");
				if(i === -1){
					for (var j = -1; j < spacings[0].length; j++) {
						if(j === -1){
							var th = d.createElement("th");
							tr.appendChild(th);
						}else{
							var th2 = d.createElement("th");
							var text = d.createTextNode(letters[j]);
							th2.appendChild(text);
							tr.appendChild(th2);
						}
					}
				}else{
					for (var k = -1; k < spacings[0].length; k++) {
						if(k === -1){
							var td = d.createElement("td");
							var text2 = d.createTextNode(letters[i]);
							td.appendChild(text2);
							tr.appendChild(td);
						}else{
							var td2 = d.createElement("td");
							var text3 = d.createTextNode(spacings[i][k]);
							td2.appendChild(text3);
							tr.appendChild(td2);
						}
					}
				}
				table.appendChild(tr);
			}
			document.body.appendChild(table);
		}
	}.init().visual();
}(document, window));
