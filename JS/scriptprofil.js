<script>
    document.addEventListener("DOMContentLoaded", function () {
  const profilePic = document.querySelector(".profile-pic");
  if (profilePic) {
    profilePic.style.width = "120px";
    profilePic.style.height = "120px";
    profilePic.style.borderRadius = "50%";
    profilePic.style.objectFit = "cover";
    profilePic.style.margin = "0 auto 15px";
    profilePic.style.display = "block";
    profilePic.style.border = "2px solid #ccc";
  }
});

</script>