class Cart {
  constructor() {
    this.items_array = [];
  }
  tambahProduk(name, count) {
    let alert;
    for (var i in this.items_array) {
      if (this.items_array[i][0] == name) {
        this.items_array.splice(i, 1, [name, this.items_array[i][1] + count]);
        alert = "ok";
        break;
      }
    }

    if (alert == null) {
      this.items_array.push([name, count]);
    }
  }

  hapusProduk(name) {
    for (var i in this.items_array) {
      if (this.items_array[i][0] == name) {
        this.items_array.splice(i, 1);
        break;
      }
    }
  }

  tampilkanProduk() {
    for (var i in this.items_array) {
      console.log(this.items_array[i][0] + " (" + this.items_array[i][1] + ")");
    }
  }
}
