const array = [8, 14, 5, 23, 34, 56, 2, 18];

class SelectionSort {
	swap(arr: number[], i: number, j: number) {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	sort(arr: number[]) {
		const n = arr.length;

		for (let i = 0; i < n; i++) {
			let minimumIndex = i;
			for (let j = i + 1; j < n; j++) {
				if (arr[j] < arr[minimumIndex]) {
					minimumIndex = j;
				}
			}

			this.swap(arr, minimumIndex, i);
		}
		return arr;
	}
}

const selection = new SelectionSort();

console.log(selection.sort(array));
