docker compose build
docker compose up -d
docker compose exec dev bash
exit # to exit from the bash

# Configure AWS CLI for LocalStack
aws configure
# Access Key: test
# Secret Key: test
# Region: us-east-1
# Output: json

# Example: List S3 buckets in LocalStack
aws --endpoint-url=http://localstack:4566 s3 ls

terraform init
terraform plan
terraform apply -auto-approve
terraform destroy -auto-approve
terraform validate
terraform state list
terraform show
terraform output

Bash Commands
aws ec2 describe-instances --region us-east-1


------------------------------------------------------------------

Variables and outputs:
Input variables let you parametrize the behavior of your Terraform configuration. You can also define output values to expose data about the resources you create.

provider aws {
    region = us-east-1
}

resource "aws_instance" "app_server" {
  ami = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  instance_type = var.instance_type

  tags = {
   Name = "learn-terraform"
   Name = var.instance_name
  }
}

variable "instance_name" {
  description = "Value of the EC2 instance's Name tag."
  type        = string
  default     = "learn-terraform"
}

variable "instance_type" {
  description = "The EC2 instance's type."
  type        = string
  default     = "t2.micro"
}

output "instance_hostname" {
  description = "Private DNS name of the EC2 instance."
  value       = aws_instance.app_server.private_dns
}






