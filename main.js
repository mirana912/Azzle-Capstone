const contentItems = document.querySelectorAll(".group");

function isMobileScreen() {
  return window.innerWidth < 1280;
}

contentItems.forEach((item) => {
  item.addEventListener("click", function () {
    if (isMobileScreen()) {
      // Toggle background
      item.classList.toggle("!bg-black");

      // Toggle màu tiêu đề (h5) và đoạn văn (p)
      const title = item.querySelector("h5");
      const desc = item.querySelector("p");
      title.classList.toggle("text-orange-600");
      desc.classList.toggle("text-white");

      // Tìm tất cả icon và arrow trong Content
      const allImgs = item.querySelectorAll("img");
      allImgs.forEach((img) => {
        // Toggle hiển thị giữa hidden / block
        if (img.classList.contains("hidden")) {
          img.classList.remove("hidden");
          img.classList.add("block");
        } else if (
          img.classList.contains("group-hover:hidden") ||
          img.classList.contains("group-hover:block")
        ) {
          img.classList.add("hidden");
          img.classList.remove("block");
        }
      });
    }
  });
});
