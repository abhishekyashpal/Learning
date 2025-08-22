docker compose build
docker compose up -d
docker compose exec dev bash
exit ##### to exit from the bash

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
terraform destroy -auto-approve - destroy the entire workspace(If want to delet specific block then comment it and run the apply command)
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

Modules:
Modules are reusable sets of configuration. Use modules to consistently manage complex infrastructure deployments that include multiple resources and data sources. 

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "5.19.0"

  name = "example-vpc"
  cidr = "10.0.0.0/16"

  azs             = ["us-west-2a", "us-west-2b", "us-west-2c"]
  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24"]

  enable_dns_hostnames    = true
}

resource "aws_instance" "app_server" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type

  vpc_security_group_ids = [module.vpc.default_security_group_id]
  subnet_id              = module.vpc.private_subnets[0]

  tags = {
    Name = var.instance_name
  }
}


---------------------------------------------------------------------

infra/
├── modules/
│   ├── network/
│   ├── compute/
│   └── database/
├── dev/
│   ├── main.tf
│   ├── variables.tf
│   └── terraform.tfvars
├── staging/
│   ├── main.tf
│   ├── variables.tf
│   └── terraform.tfvars
└── prod/
    ├── main.tf
    ├── variables.tf
    └── terraform.tfvars

----------------------------------------------------------------------

Deployment methods overview:
Blue/green deployments maintain two identical production environments concurrently. This method allows you to shift traffic from the current version (blue) to the upgraded version (green).
Canary deployments introduce new versions incrementally to a subset of users. This approach lets you test upgrades with limited exposure, working alongside other deployment systems.
Rolling deployments update applications gradually across multiple servers. This technique ensures only a portion of your infrastructure changes at once, reducing the risk of widespread issues.

Environment setup:
Blue/Green: Requires two nearly identical environments.
Canary: Requires two nearly identical environments. Initially uses a small subset of users or servers.
Rolling: Updates subsets of servers in batches.
Traffic switching:
Blue/Green: Switches all traffic at once.
Canary: Gradually increases traffic to the new version.
Rolling: Sequentially updates and transitions traffic.
Rollback mechanism:
Blue/Green: Switching back to the blue environment.
Canary: Rollback involves reducing or stopping the canary deployment.
Rolling: Rollback involves reverting batches, which can be more complex.

          





