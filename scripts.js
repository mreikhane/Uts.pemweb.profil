document.addEventListener("DOMContentLoaded", function () {
    function addScrollAnimation(targetClass, animationClass) {
        const targets = document.querySelectorAll(targetClass);

        const options = {
            root: null,
            threshold: 0.5,
            rootMargin: "0px"
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animationClass);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        targets.forEach((target) => {
            observer.observe(target);
        });
    }

    addScrollAnimation(".intro", "fade-in");
    addScrollAnimation(".profile", "fade-in");
    addScrollAnimation(".main-wrapper", "fade-in");
    addScrollAnimation(".project-result", "fade-in");

});
