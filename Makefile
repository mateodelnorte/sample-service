DEBUG=taxservice*,emailservice*

RABBITMQ_URL=amqp://localhost:5672

start: ; ${MAKE} -j4 email tax

email:
	DEBUG=$(DEBUG) \
	RABBITMQ_URL=$(RABBITMQ_URL) \
	node email-service.js;

tax:
	DEBUG=$(DEBUG) \
	RABBITMQ_URL=$(RABBITMQ_URL) \
	node tax-service.js;