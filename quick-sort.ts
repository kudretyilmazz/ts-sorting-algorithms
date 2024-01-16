const array = [8, 14, 5, 23, 34, 56, 2, 18];

class QuickSort {
	private swap(arr: number[], i: number, j: number) {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	private _sort(arr: number[], beginIndex: number, endIndex: number) {
		if (beginIndex >= endIndex) {
			return;
		}

		const pivot = arr[endIndex];
		let j = beginIndex - 1;

		for (let i = beginIndex; i < endIndex; i++) {
			if (arr[i] < pivot) {
				j++;
				this.swap(arr, i, j);
			}
		}

		j++;
		this.swap(arr, endIndex, j);

		this._sort(arr, beginIndex, j - 1);
		this._sort(arr, j + 1, endIndex);

		return arr;
	}

	sort(arr: number[]) {
		return this._sort(arr, 0, arr.length - 1);
	}
}

const quick = new QuickSort();

console.log(quick.sort(array));
