# Use Python slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy backend code into container
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir flask pymongo

# Expose port 5000
EXPOSE 5000

# Run the app
CMD ["python", "app.py"]