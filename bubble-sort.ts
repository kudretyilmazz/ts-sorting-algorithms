const array = [8, 14, 5, 23, 34, 56, 2, 18];

class BubbleSort {
	private swap(arr: number[], i: number, j: number) {
		const temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	sort(arr: number[]) {
		const n = arr.length;

		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					this.swap(arr, j, j + 1);
				}
			}
		}
		return arr;
	}

	optimizedSort(arr: number[]) {
		const n = arr.length;
		let swapped = false;

		for (let i = 0; i < n - 1; i++) {
			swapped = false;
			for (let j = 0; j < n - 1 - i; j++) {
				if (arr[j] > arr[j + 1]) {
					this.swap(arr, j, j + 1);
					swapped = true;
				}
			}

			if (!swapped) {
				break;
			}
		}
		return arr;
	}
}

const bubble = new BubbleSort();

console.log(bubble.sort(array));
console.log(bubble.optimizedSort(array));
