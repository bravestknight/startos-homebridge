build:
	docker build -t startos-homebridge .

run:
	docker run -p 8581:8581 -v $(PWD)/homebridge:/homebridge startos-homebridge
