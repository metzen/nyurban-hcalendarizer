RELEASE_DIR='build'
RELEASE_FILE='nyurban_hcalendarizer.zip'

dist:
	mkdir -p $(RELEASE_DIR)
	zip -r $(RELEASE_DIR)/$(RELEASE_FILE) *

distclean:
	rm -rf build
