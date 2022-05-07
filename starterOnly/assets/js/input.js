class Input {
  constructor(elt, errorMessage) {
    this.elt = elt;
    this.errorMessage = errorMessage;
  }

  getParent() {
    return this.elt.parentElement;
  }

  displayError() {
    this.getParent().setAttribute("data-error-visible", "true");
    this.getParent().setAttribute("data-error", this.errorMessage);
  }

  removeDisplayError() {
    this.getParent().removeAttribute("data-error-visible");
    this.getParent().removeAttribute("data-error");
  }

  removeOrDisplayError(isValid) {
    isValid ? this.removeDisplayError() : this.displayError();
  }

}
