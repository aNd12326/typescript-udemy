"use strict";
(() => {
    const fullName = (firstName, ...restoArgs) => {
        return `${firstName} ${restoArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
