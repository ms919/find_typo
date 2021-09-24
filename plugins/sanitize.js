import Vue from "vue";
import sanitizeHTML from "sanitize-html";

sanitizeHTML.defaults.allowedTags = ["p"];
sanitizeHTML.defaults.allowedAttributes.p = ["class", "id"];

Vue.prototype.$sanitize = sanitizeHTML;
