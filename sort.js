		

	let field = document.querySelector('.product');
	let li = Array.from(field.children);
	let select = document.getElementsById('select');
	let ar = [];

	for (let i of '.product') {
		const last = i.lastElementChild;
		const x = last.textContent.trim();
		const y = Number(x.substring(1));
		i.setAttribute('data-price',y);
		ar.push(i);
	}

	select.onchange = sortingValue;

	function sortingValue()
	{
		if (this.value === 'Dafault') 
		{
			while(field.firstChild){
				field.removeChild(field.firstChild);
			}
			field.append(...ar);
		}
			if (this.value === 'LowToHigh') 
			{
				sortElem(field, li, true);
			}
			if (this.value === 'HighToLow') 
			{
				sortElem(field, li, false);
			}
	}
	
	function sortElem(field, li, acs)
	{
		let dm, sortLi;
		dm = asc ? 1 : -1;
		sortLi = li.sort((a, b) => {
			const ax = a.getAttribute('data-price');
			const bx = b.getAttribute('data-price');

			return ax> bx ? (1*dm) : (-1*dm);

		})
		while(field.firstChild){
				field.removeChild(field.firstChild);
			}
			field.append(...sortLi);
	}



