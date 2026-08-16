(() => {
  const button = document.querySelector("[data-hachi-share]");
  const status = document.querySelector("[data-hachi-share-status]");
  if (!button || !status) return;

  const url = "https://friendsofbelperparks.online/hachi/";
  const text = "Thử một phút vận động cùng HACHI nhé — không chuỗi ngày, không áp lực.";

  button.addEventListener("click", async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: "Đi một phút cùng HACHI", text, url });
        status.textContent = "Bảng chia sẻ đã mở.";
        return;
      }
      await navigator.clipboard.writeText(url);
      status.textContent = "Đã sao chép liên kết HACHI.";
    } catch (error) {
      if (error && error.name === "AbortError") return;
      status.textContent = "Chưa chia sẻ được. Bạn có thể sao chép địa chỉ trang này.";
    }
  });
})();
