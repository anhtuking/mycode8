const food = [
  {
    id: 1,
    name: "Vi Cá Mập",
    image: "https://yenkhanhhoa.info/wp-content/uploads/2014/10/soup-vi-ca-map.jpg",
    price: "250 $",
    quantity: "99",
    detail: "<br>Giá trị và công dụng: <br> Vi cá mập được sử dụng làm thực phẩm từ cách đây hàng ngàn năm nhưng các nhà khoa học mới quan tâm đến tác dụng của vi và sụn cá mập tới bệnh tật từ những năm 1950-1960. Chất Chondroitin có trong sụn vi cá mập thường được chế biến thành những loại thuốc có tác dụng:<br>- Chữa trị các bệnh về xương khớp: Do Chondroitin ức chế các men phá hủy chất sụn trong khớp, kích hoạt các men xúc tác cho quá trình tổng hợp axit hyaluronic.<br>- Đây là chất cần thiết cho khớp hoạt động tốt, thuốc này dùng cho những trường hợp thấp khớp, đau nhức xương khớp.<br>Thành phần dinh dưỡng:<br>- Vi cá mập hoàn toàn là chất sụn, 100g vi cá khô có 89% chất đạm (cao nhất trong thực phẩm giàu đạm), 0.1% bột đường, 0.22% chất béo, cung cấp 384 calo, một ít chất khoáng.<br>Hình dạng, kích thước và cấu tạo da vi<br>Hầu hết các loài cá mập có vi hình tam giác. Kích thước của một vi được đo dựa vào độ dài cơ sở của vi hoặc khoảng cách giữa trung tâm của các đường cơ sở và chóp của vi cá. Tùy thuộc vào kích thước, vi được phân loại như rất lớn (40 cm và ở trên), lớn (30–40 cm), trung bình (20–30 cm), nhỏ (10–20 cm), rất nhỏ (4–10 cm)<br>Ở đây ta lấy kích thước trung bình của vi cá như sau: Đường cơ sở đáy của vi là 20 cm, chiều cao vi là 35 cm. Trung bình mỗi vi nặng 1,5 kg."
  },

  {
    id: 2,
    name: "Bò Kobe",
    image: "./img/bo_kobe.jpg",
    price: "380 $",
    quantity: "99",
    detail:"<br>Thịt bò Kobe ở Nhật Bản là một thương hiệu của.Hiệp hội Marketing & Quảng cáo bò Kobe (神戶肉流通推進協議會 (Thần Hộ nhục Lưu thông Thôi tiến Hiệp nghị hội). Nó phải đáp ứng những điều kiện sau đây:<br>- Bò nhà Tajima phải được sinh ra ở Hyōgo.<br>- Nuôi dưỡng tại đồng cỏ ở Hyōgo.<br>- Bò phải được đem đi thiến để đảm bảo sự tinh khiết.<br>- Quá trình làm thịt phải được diễn ra ở Kobe, Sanda, Kakogawa, Himeji, Nishinomiya.<br>- Tỉ lệ thịt và mỡ, gọi là BMS, phải trên mức 6.<br>- Chất lượng thịt phải từ điểm 4 đến 5.<br>- Tổng trọng lượng của thịt từ một con bò phải từ 470 kg trở xuống.<br>Nhưng với số lượng thịt Bò Kobe do chính Hãng Kobe xuất xưởng không có nhiều,[6] mỗi ngày chỉ có vài con Ngay chính người Nhật muốn đặt thịt bò Kobe do hãng Kobe cung cấp cũng có khi vài tháng mới đến lượt cho nên những món được quảng cáo là thịt bò kobe thì rất có thể chỉ là loại thịt bò được nuôi theo phương pháp kobe hoặc có xuất xứ ở địa danh trên chứ chưa chắc đã phải là thịt bò do chính hãng Kobe cung cấp."
  },

  {
    id: 3,
    name: "Tôm hùm Alaska",
    image: "./img/tom.webp",
    price: "300 $",
    quantity: "99",
    detail:"<br>Tôm hùm Alaska còn gọi là Tôm hùm Canada<br>Quy cách : 900gram - 3kg/con <br>Tình trạng :Tươi sống.<br>Xuất Xứ: Nova Scotia - Canada<br>Cam Kết: Chính sách cam kết chất lượng<br>Món ngon: Hấp thái, nướng phô mai, sốt bơ tỏi, sốt trứng muối, sốt ớt Singapore, rang muối Hồng Kong...,<br>Tôm hùm Alaska có thể s.ống khỏe được từ 4-6 tiếng kể từ lúc giao hàng nên rất phù hợp mang đi xa.<br>Tôm hùm Canada là thực phẩm mang lại nhiều lợi ích sức khỏe cho con người dưới nhiều hình thức chế biến khác nhau. Chính vì thế rất nhiều thực khách ưa chuộng, các nhà hàng lớn trên thế giới thường ưu tiên Tôm Hùm Canada là món chính trong thực đơn hải sản của họ"
  },

  {
    id: 4,
    name: "Trứng Cá Tầm Caviar",
    image: "./img/trung_ca.jpg",
    price: "400 $",
    quantity: "99",
    detail:"<br>Trứng cá tầm Caviar một món ăn sang trọng và cao cấp được lấy từ trứng của các loại cá Tầm thuộc họ Acipenseridae sau đó được ngâm trong nước muối. Trứng cá Tầm Caviar là loại đồ ăn rất ngon và bổ dưỡng song giá tiền bỏ ra để được ăn nó cũng vô cùng lớn, nó được xem là một chuẩn mực của đời sống thượng lưu và tinh hoa trong ẩm thực.<br>Trứng cá tầm Caviar là trứng chưa thụ tinh của cá tầm thuộc họ Sturgeon, sau đó được vệ sinh sạch sẽ rồi ngâm trong nước muối. Trứng cá tầm có rất nhiều loại khác nhau, từ các giống cá khác nhau đến xuất xứ khác nhau, vì vậy giá bán cũng giao động từ trung bình đến cực kỳ đắt đỏ.<br>Vì quá đắt, nên trứng cá tầm Caviar thường dùng để loại trang trí tô điểm cho các món ăn khai vị, hay dùng như một món ăn kèm, món phết hoặc trong món Sushi và thường chỉ được phục vụ trong những nhà hàng sang trọng hàng đầu."
  },
];
const drink = [
  {
    id: 1,
    name: "Billionaire Vodka",
    image: "./img/voka.jpg",
    price: "250 $",
    quantity: "99",
    detail:"<br>Billionaire Vodka đã được chưng cất bằng kim cương và đựng trong chai pha lê Swarovski cực kỳ đắt giá. Billionaire Vodka 2015 được trang trí bởi gần 2.000 viên kim cương và được dát vàng lấp lánh.<br>Billionaire chưng cất ba lần lấy chất lỏng của nó từ suối tự nhiên cung cấp cho Lâu đài Carverswall của Anh. Được biết đến với đặc tính chữa bệnh, sự tinh khiết của nước này tỏa sáng qua từng ngụm rượu vodka cao cấp của bạn. Hơn nữa, công ty nói rằng nước được sử dụng trong The Billionaire chảy qua những viên kim cương nghiền nát trị giá hàng triệu đô la. <br>The Billionaire chỉ có sẵn ở một số cửa hàng và nhà hàng được chọn trên khắp thế giới. Leon Verres cũng có kế hoạch tung ra các phiên bản rẻ hơn, 0,5 lít rượu lọc qua kim cương, sẽ được đóng trong chai thủy tinh nặng màu tím quý giá được trang trí bằng biểu tượng đính pha lê Swarovski.<br>Rượu Vodka Billionaire, Dòng Diamond Edition được khoác một lớp lông giả có màu đen đậm để tạo cho nó một vẻ ngoài quyền lực và nổi trội. Nó là một chai 18 lít và chứa đầy rượu vodka đã được tạo ra từ một công thức ban đầu có nguồn gốc từ Nga. Nó là một chai 18 lít, vì vậy ít nhất là có điều đó! Ngoài ra còn có một chai 0,7 lít rẻ hơn nhiều, mặc dù vẫn quá đắt đối với người uống bình thường của bạn. Giống như những người khác trong danh sách này, không chỉ có cái chai khiến nó trở nên đắt đỏ như vậy. Đó là một trong những loại vodka mịn nhất mà bạn từng có. Diamond Edition là một phần của loạt phiên bản giới hạn và mặc dù có mức giá lớn nhưng vẫn là một mặt hàng đã bán hết."
  },

  {
    id: 2,
    name: "Isabella’s Islay ",
    image: "./img/isa.jpg",
    price: "390 $",
    quantity: "99",
    detail:"<br>Isabella Islay Whisky một  loại rượu Scotch  được phân loại là  rượu whisky  mạch nha đơn và thuộc nhãn hiệu Isabella's Islay Whiskey . Isabella Islay Whisky có bán tại  Dial A Drink Kenya a và chứa  40% ABV (cồn theo thể tích) . Rượu whisky có dung tích  750ml có giá 800.600 Ksh  tại  Dial a Drink Kenya. <br>  Tại Dial A Drink Kenya,  chúng tôi cung cấp cho bạn giárượu whisky và rượu  ở Kenya, rượu chất lượng cũng như nhanh và miễn phí trong Nairobi và các vùng lân cận. Rượu whisky Isabela Islay được đính 8500 viên kim cương, gần 300 viên hồng ngọc và được tạo hình tương đương với hai thanh vàng trắng bao phủ một bình pha lê Anh tinh xảo. Nó giữ danh hiệu loại rượu whisky đắt nhất thế giới và nó đã làm được điều đó một dặm, về mặt kỹ thuật là khoảng 6 triệu đô la.<br>Rượu whisky Islay của Isabella là loại rượu whisky Scotch mạch nha đơn được sản xuất bởi Isabella's Islay ở Islay (Scotland). Nó được làm từ một hỗn hợp nghiền mạch nha của lúa mạch.<br>Tại  dial a Drink Kenya,  chúng tôi cũng cung cấp các sản phẩm khác như  Billionaire Vodka, Tequila Ley 925, Russo-Baltique Vodka, Macallan Lalique Scotch, Diamond Jubilee By Johnnie Walker và Revelation By Bombay Sapphire cùng nhiều loại rượu đắt nhất thế giới khác. tất cả đều có sẵn với  giá rượu whisky /  rượu tốt nhất  ở  Kenya.<br>Dịch vụ giao hàng của chúng tôi miễn phí và nhanh chóng.<br>Truy cập trang web của chúng tôi Quay số đồ uống Kenya để có nhiều loại đồ uống từ rượu vang, rượu gin, rượu vodka, rượu rum, rượu whisky, rượu mùi, rượu tequila, chỉ đề cập đến một số loại."
  },

  {
    id: 3,
    name: "The Eye of the Dragon",
    image: "./img/dragon.jpg",
    price: "300 $",
    quantity: "99",
    detail:"<br>The Eye of the Dragon<br>là một trong những loại rượu vodka đắt tiền nhất trên thế giới. Eye of the Dragon tự bản thân nó đã là một kiệt tác vì bạn sẽ có thể nhìn thấy một con rồng xinh đẹp được nạm mười lăm nghìn viên kim cương sáu trăm hai mươi carat có giá trị tính bằng triệu. Nó được công chiếu vào tháng 10 năm 2017 và là sự phản ánh của sự hoàn hảo và xuất sắc từ thương hiệu<br>Royal Dragon Vodka là một công ty xuất xứ từ Hà Lan tại Hồng Kông có liên quan đến việc sản xuất rượu vodka cao cấp. Một trong những vodka đắt nhất của hãng là The Eye of the Dragon với giá 5,5 triệu đô la Mỹ. Đó là sự hợp tác giữa công ty vodka và Scarselli Diamonds New York và họ đã mất 8 tháng lao động vất vả để hoàn thành tác phẩm này. Đây là một chai được thổi thủ công và chứa đầy rượu Royal Dragon Imperial Vodka được bao bọc trong hộp 18-Karat nặng 2kg và bao gồm những viên kim cương tròn màu vàng đậm 50 carat trị giá 4,65 triệu đô la Mỹ."
  },

  {
    id: 4,
    name: "Belver Bears Belvedere Vodka",
    image: "./img/bel.jpg",
    price: "400 $",
    quantity: "99",
    detail:"<br>Belver Bears Belvedere Vodka <br> là loại vodka thượng hạng được ưa chuộng trên toàn thế giới vì hương vị thơm ngon và mượt mà. Nó được chưng cất bốn lần chứ không phải ba lần thông thường để giữ nguyên hương vị. Thương hiệu đã lấy nước tinh khiết từ các giếng thủ công để có thể duy trì tính độc quyền của mình. Rượu vodka được đựng trong những chai đặc biệt được làm từ thủy tinh mờ và được trang bị đèn nền. Thương hiệu đã đặt tên vodka là Belver Bears vì các chai có hình dáng của những con gấu. Bạn có thể dễ dàng treo những chiếc chai xinh đẹp này trong phòng để trang trí sau khi uống hết rượu ben trong vì nó trông rất đẹp.<br>Belver Bears Belvedere Vodka là một trong những loại vodka đắt nhất thế giới. Nó được trưng bày tại Liên hoan phim Cannes năm 2011. Chai rượu là kết quả của sự hợp tác giữa Belvedere, công ty gốc Ba Lan, và nhạc sĩ kiêm ca sĩ DJ Jean-Roch. Đây là một phần của loạt phiên bản giới hạn vì ban nhạc đã phát hành số lượng chai có hạn để làm cho nó trở nên độc đáo."
  },
];

function Food() {
  var html = "";
  for (i in food) {
    html + "<tr>";
    html += "<td>" + food[i].id + "</td>";
    html += "<td>" + food[i].name + "</td>";
    html +=
      "<td><img src=" + food[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + food[i].price + "</td>";
    html += "<td>" + food[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProductFood(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDeleteFromFood(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='DetailProductFood(" + i + ")'>Detail</button></td>";
    html += "</tr>";
    document.getElementById("tbl").innerHTML = html;
  }
  return html;

}
function Drink() {
  var html = "";
  for (i in drink) {
    html + "<tr>";
    html += "<td>" + drink[i].id + "</td>";
    html += "<td>" + drink[i].name + "</td>";
    html +=
      "<td><img src=" + drink[i].image + " style=height:50px;width:50px></td>";
    html += "<td>" + drink[i].price + "</td>";
    html += "<td>" + drink[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProductDrink(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDeleteFromDrink(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='DetailProductDrink(" + i + ")'>Detail</button></td>";
    html += "</tr>";
    document.getElementById("tbl").innerHTML = html;
  }

  return html;

}

function create() {
  var ID = document.getElementById("id").value;
  var Name = document.getElementById("name").value;
  var Image = document.getElementById("img").value;
  var Price = document.getElementById("price").value;
  var Quantity = document.getElementById("quantity").value;
  var Select = document.getElementById("Select").value;
  var Detail = document.getElementById("detail").value;

  var newProduct = {
    id: ID,
    name: Name,
    image: Image,
    price: Price,
    quantity: Quantity,
    detail: Detail,
  };

  if (Select === "food") {
    food.push(newProduct);
  } else if (Select === "drink") {
    drink.push(newProduct);
  }

  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("img").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("detail").value = "";

  show(Select === "food" ? arr : drink);
}

function editProductFood(index) {
  document.getElementById("editProductName").value = food[index].name;
  document.getElementById("editProductImageFood").src = food[index].image;
  document.getElementById("editProductPrice").value = food[index].price;
  document.getElementById("editProductQuantity").value = food[index].quantity;
  document.getElementById("editProductDetail").value = food[index].detail;
  document.getElementById("editFormFood").style.display = "block";
  document.getElementById("editIndexFood").value = index;
  document.getElementById("editFormDrink").style.display = "none";
}
function editProductDrink(index) {
  document.getElementById("editProductNameDrink").value = drink[index].name;
  document.getElementById("editProductImageDrink2").src = drink[index].image;
  document.getElementById("editProductPriceDrink").value = drink[index].price;
  document.getElementById("editProductQuantityDrink").value = drink[index].quantity;
  document.getElementById("editProductDetailDrink").value = drink[index].detail;
  document.getElementById("editFormDrink").style.display = "block";
  document.getElementById("editIndexDrink").value = index;
  document.getElementById("editFormFood").style.display = "none";

} 
function updateProduct() {
  var newName = document.getElementById("editProductName").value;
  var newImage = document.getElementById("editProductImage").value;
  var newPrice = document.getElementById("editProductPrice").value;
  var newQuantity = document.getElementById("editProductQuantity").value;
  var newDetail = document.getElementById("editProductDetail").value;
  var indexToUpdate = parseInt(
    document.getElementById("editIndexFood").value
  );
  food[indexToUpdate].name = newName;
  food[indexToUpdate].image = newImage;
  food[indexToUpdate].price = newPrice;
  food[indexToUpdate].quantity = newQuantity;
  food[indexToUpdate].detail = newDetail;

  document.getElementById("editFormFood").style.display = "none";
  Food();
}
function updateProductDrink() {
  var newName = document.getElementById("editProductNameDrink").value;
  var newImage = document.getElementById("editProductImageDrink").value;
  var newPrice = document.getElementById("editProductPriceDrink").value;
  var newQuantity = document.getElementById("editProductQuantityDrink").value;
  var newDetail = document.getElementById("editProductDetailDrink").value;

  var indexToUpdate = parseInt(
    document.getElementById("editIndexDrink").value
  );
  drink[indexToUpdate].name = newName;
  drink[indexToUpdate].image = newImage;
  drink[indexToUpdate].price = newPrice;
  drink[indexToUpdate].quantity = newQuantity;
  drink[indexToUpdate].detail = newDetail;

  document.getElementById("editFormDrink").style.display = "none";
  Drink();
} 

function DetailProductFood(index) {
  var product;

  product = food[index];

  // Tạo HTML hiển thị thông tin chi tiết sản phẩm
  var html = "<h2>DETAIL</h2>";

  html += "<p><strong>ID:</strong> " + product.id + "</p>";
  html += "<p><strong>Name:</strong> " + product.name + "</p>";
  html += "<p><strong>Image:</strong> <img src='" + product.image + "' style='height: 100px; width: 100px;'></p>";
  html += "<p><strong>Price:</strong> " + product.price + "</p>";
  html += "<p><strong>Quantity:</strong> " + product.quantity + "</p>";
  html += "<p><strong>Detail:</strong> " + product.detail + "</p>";

  // Hiển thị thông tin chi tiết trong một modal hoặc phần tử khác
  var modalElement = document.getElementById("modal");
  modalElement.innerHTML = html;
  modalElement.style.display = "block";
}
function DetailProductDrink(index) {
  var product;

  product = drink[index];

  var html = "<h2>CHI TIẾT SẢN PHẨM</h2>";

  html += "<p><strong>ID:</strong> " + product.id + "</p>";
  html += "<p><strong>Name:</strong> " + product.name + "</p>";
  html += "<p><strong>Image:</strong> <img src='" + product.image + "' style='height: 100px; width: 100px;'></p>";
  html += "<p><strong>Price:</strong> " + product.price + "</p>";
  html += "<p><strong>Quantity:</strong> " + product.quantity + "</p>";
  html += "<p><strong>Detail:</strong> " + product.detail + "</p>";

  var modalElement = document.getElementById("modal");
  modalElement.innerHTML = html;
  modalElement.style.display = "block";
}
function confirmDeleteFromFood(index) {
  // Xác nhận việc xóa sản phẩm từ danh sách FOOD
  if (confirm("Confirm removal from FOOD list by ID: " + food[index].id + "?")) {
    // Xóa sản phẩm khỏi mảng 'food'
    food.splice(index, 1);
    // Cập nhật bảng sản phẩm Food
    Food();
  }
}
function confirmDeleteFromDrink(index) {
  if (confirm("Confirm removal from DRINK list by ID: " + drink[index].id + "?")) {
    drink.splice(index, 1);
    Drink();
  }
}

function search() {
  var keyword = document.getElementById("searchInput").value;
  searchProduct(keyword);
}

function searchProduct(keyword) {
  var searchResults = [];
  for (var i = 0; i < food.length; i++) {
    if (food[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      searchResults.push(food[i]);
    }
  }
  for (var i = 0; i < drink.length; i++) {
    if (drink[i].name.toLowerCase().includes(keyword.toLowerCase())) {
      searchResults.push(drink[i]);
    }
  }
  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  var html = "";
  for (var i = 0; i < results.length; i++) {
    html += "<tr>";
    html += "<td>" + results[i].id + "</td>";
    html += "<td>" + results[i].name + "</td>";
    html += "<td><img src='" + results[i].image + "' style='height:50px;width:50px;'></td>";
    html += "<td>" + results[i].price + "</td>";
    html += "<td>" + results[i].quantity + "</td>";
    html += "<td><button class='edit-btn' onclick='editProduct(" + i + ")'>Edit</button></td>";
    html += "<td><button class='delete-btn' onclick='confirmDelete(" + i + ")'>Delete</button></td>";
    html += "<td><button class='detail-btn' onclick='editProduct(" + i + ")'>Detail</button></td>";
    html += "</tr>";
  }
  document.getElementById("tbl").innerHTML = html;
}

function displayAllProducts() {
  var html = "";
  html += Food(); 
  html += Drink(); 
  document.getElementById("tbl").innerHTML = html;
}
