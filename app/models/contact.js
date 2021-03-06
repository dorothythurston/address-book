import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr("string", { defaultValue: ""}),
  lastName: DS.attr("string", { defaultValue: ""}),
  phone: DS.attr("string", { defaultValue: "" }),

  name: function () {
    return this.get("firstName") + " " + this.get("lastName");
  }.property("firstName", "lastName")
});
